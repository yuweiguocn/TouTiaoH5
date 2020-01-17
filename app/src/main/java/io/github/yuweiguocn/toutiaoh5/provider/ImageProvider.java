package io.github.yuweiguocn.toutiaoh5.provider;

import android.content.ContentProvider;
import android.content.ContentValues;
import android.database.Cursor;
import android.net.Uri;
import android.os.ParcelFileDescriptor;

import androidx.annotation.NonNull;
import androidx.annotation.Nullable;

import com.facebook.cache.common.CacheKey;
import com.facebook.imagepipeline.cache.DefaultCacheKeyFactory;
import com.facebook.imagepipeline.request.ImageRequest;

import java.io.File;
import java.io.FileNotFoundException;
import java.util.Iterator;
import java.util.List;

import io.github.yuweiguocn.toutiaoh5.app.App;
import io.github.yuweiguocn.toutiaoh5.bean.WebImage;
import io.github.yuweiguocn.toutiaoh5.utils.FrescoUtils;
import io.github.yuweiguocn.toutiaoh5.utils.L;
import io.github.yuweiguocn.toutiaoh5.utils.MyCacheEventListener;
import io.github.yuweiguocn.toutiaoh5.utils.WeakContainer;
import io.github.yuweiguocn.toutiaoh5.utils.ZipUtils;

public class ImageProvider extends ContentProvider {
    //    content://io.github.yuweiguocn.toutiaoh5.provider.ImageProvider/getimage/origin/eJy1ku0KwiAUhm8l_F3qvuduJSJ0mRO2JtupiNi9Z4MoWiOa65cinMeX57xXVDda6QPKFld0bLQ9UckbJYlR-UpX3N5Smfi5x3JJ934YxWlKWZhEgbeLhBB-QNFyYUfL1s6uUQFgMkKMtwLA4gJSVwrndUWmUP8CC5xhm87izlKY7VDeTgLXZUtOlJzjkP6AxXfiR5eMYdMCB9PHneGHBzh-VzEje7AzV3ZvHYpjJV599w-uZWXvWadQR_vlAhtY_Bn2LKuzu_GGOscc1MfZ4veyTyNuuu4G1giVqQ==/6694469396007485965/3
    private static WeakContainer<Image> images = new WeakContainer<>();
    private static WeakContainer<ImageListener> imageListeners = new WeakContainer<>();

    private static MyCacheEventListener.OnDiskCacheListener listener=new MyCacheEventListener.OnDiskCacheListener() {
        @Override
        public void onWriteException(CacheKey cacheKey) {

        }

        @Override
        public void onWriteSuccess(CacheKey cacheKey) {
            Image image = null;
            Iterator<Image> imageIterator = images.iterator();
            while (imageIterator.hasNext()) {
                Image next = imageIterator.next();
                if (next != null && next.key.equals(cacheKey)) {
                    image = next;
                    break;
                }
            }
            if (image == null) {
                return;
            }
            images.remove(image);
            Iterator<ImageListener> iterator = imageListeners.iterator();
            while (iterator.hasNext()){
                ImageListener next = iterator.next();
                if (next != null) {
                    next.onLoaded(image.groupid, image.index, true);
                }
            }
        }
    };

    public interface ImageListener{
        void onLoaded(String groupid, int index, boolean isSuccess);
    }


    public static void registerImageListener(ImageListener listener) {
        imageListeners.add(listener);
    }
    public static void unregisterImageListener(ImageListener listener) {
        imageListeners.remove(listener);
    }

    public static void init() {
        MyCacheEventListener.getInstance().registerOnDiskCacheListener(listener);
    }


    public static class Image{
        public String groupid;
        public int index;
        public CacheKey key;

        public Image(String groupid, int index, CacheKey key) {
            this.groupid = groupid;
            this.index = index;
            this.key = key;
        }
    }

    @Nullable
    @Override
    public ParcelFileDescriptor openFile(@NonNull Uri uri, @NonNull String mode) throws FileNotFoundException {
        L.d("ImageProvider:openFile " + uri.toString());
        File file = getFile(uri);
        if (file != null) {
            L.d("ImageProvider:openFile:" + file.getAbsolutePath());
        }
        return file != null ? ParcelFileDescriptor.open(file, ParcelFileDescriptor.MODE_READ_ONLY) : null;
    }


    public static File getFile(Uri uri) {
        if (uri == null) {
            return null;
        }
        List<String> pathSegments = uri.getPathSegments();
        if (pathSegments.size() < 3) {
            return null;
        }
        boolean getimage = "getimage".equals(pathSegments.get(0)) || "image".equals(pathSegments.get(0));
        if (getimage) {
            String zipImage = pathSegments.get(2);

            String jsonImage = ZipUtils.unzip(zipImage);
            WebImage image = App.getGson().fromJson(jsonImage, WebImage.class);
            for (int i = 0; i < image.webp_origin.urls.size(); i++) {
                if (FrescoUtils.isImageDownloaded(image.webp_origin.urls.get(i))) {
                    return FrescoUtils.getCachedImageOnDisk(image.webp_origin.urls.get(i));
                }
            }
            FrescoUtils.downLoadImage(image.webp_origin.urls.get(0));
            try {
                if (pathSegments.size() < 4) {
                    return null;
                }
                String groupid = pathSegments.get(3);
                int index = Integer.valueOf(pathSegments.get(4));
                images.add(new Image(groupid,index, DefaultCacheKeyFactory.getInstance().getEncodedCacheKey(ImageRequest.fromUri(Uri.parse(image.webp_origin.urls.get(0))), null)));
            } catch (Exception e) {
                L.e(e);
            }
        }
        return null;
    }



    @Override
    public boolean onCreate() {
        return false;
    }

    @Nullable
    @Override
    public Cursor query(@NonNull Uri uri, @Nullable String[] projection, @Nullable String selection, @Nullable String[] selectionArgs, @Nullable String sortOrder) {
        return null;
    }

    @Nullable
    @Override
    public String getType(@NonNull Uri uri) {
        return null;
    }

    @Nullable
    @Override
    public Uri insert(@NonNull Uri uri, @Nullable ContentValues values) {
        return null;
    }

    @Override
    public int delete(@NonNull Uri uri, @Nullable String selection, @Nullable String[] selectionArgs) {
        return 0;
    }

    @Override
    public int update(@NonNull Uri uri, @Nullable ContentValues values, @Nullable String selection, @Nullable String[] selectionArgs) {
        return 0;
    }
}
