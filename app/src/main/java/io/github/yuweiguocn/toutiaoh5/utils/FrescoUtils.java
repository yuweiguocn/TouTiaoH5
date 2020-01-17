package io.github.yuweiguocn.toutiaoh5.utils;

import android.net.Uri;

import com.facebook.binaryresource.BinaryResource;
import com.facebook.binaryresource.FileBinaryResource;
import com.facebook.cache.common.CacheKey;
import com.facebook.cache.disk.FileCache;
import com.facebook.common.executors.CallerThreadExecutor;
import com.facebook.datasource.BaseDataSubscriber;
import com.facebook.datasource.DataSource;
import com.facebook.datasource.DataSubscriber;
import com.facebook.drawee.backends.pipeline.Fresco;
import com.facebook.imagepipeline.cache.DefaultCacheKeyFactory;
import com.facebook.imagepipeline.core.ImagePipelineFactory;
import com.facebook.imagepipeline.datasource.BaseBitmapDataSubscriber;
import com.facebook.imagepipeline.request.ImageRequest;
import com.facebook.imagepipeline.request.ImageRequestBuilder;

import java.io.File;

public class FrescoUtils {

    private FrescoUtils() {

    }

    public static void downLoadImage(String url) {
        downLoadImage(Uri.parse(url));
    }

    public static void downLoadImage(Uri uri) {
        L.d("downLoadImage:" + uri.toString());
        downLoadImage(uri, null);
    }

    public static void downLoadImage(Uri uri, BaseBitmapDataSubscriber dataSubscriber) {
        DataSource fetchDecodedImage = Fresco.getImagePipeline().fetchDecodedImage(ImageRequestBuilder.newBuilderWithSource(uri).setProgressiveRenderingEnabled(true).build(), null);
//        if (dataSubscriber != null) {
            L.d("Thread.currentThread()=" + Thread.currentThread().toString());
            fetchDecodedImage.subscribe(new DataSubscriber() {
                @Override
                public void onNewResult(DataSource dataSource) {
                    L.d("downLoadImage onNewResult");
                }

                @Override
                public void onFailure(DataSource dataSource) {
                    L.d("downLoadImage onFailure");
                }

                @Override
                public void onCancellation(DataSource dataSource) {
                    L.d("downLoadImage onCancellation");
                }

                @Override
                public void onProgressUpdate(DataSource dataSource) {
                    L.d("downLoadImage onProgressUpdate");
                }
            }, CallerThreadExecutor.getInstance());
//        }
    }

    public static void downLoadImage(Uri uri, BaseDataSubscriber baseDataSubscriber) {
        DataSubscriber dataSubscriber = baseDataSubscriber;
        DataSource fetchDecodedImage = Fresco.getImagePipeline().fetchDecodedImage(ImageRequestBuilder.newBuilderWithSource(uri).setProgressiveRenderingEnabled(true).build(), null);
        if (dataSubscriber != null) {
            fetchDecodedImage.subscribe(dataSubscriber, CallerThreadExecutor.getInstance());
        }
    }

    public static boolean isImageDownloaded(String url) {
        return isImageDownloaded(Uri.parse(url));
    }

    public static boolean isImageDownloaded(Uri uri) {
        L.d("isImageDownloaded:" + uri.toString());
        boolean downloaded = true;
        if (uri == null) {
            return false;
        } else {
            CacheKey encodedCacheKey = DefaultCacheKeyFactory.getInstance().getEncodedCacheKey(ImageRequest.fromUri(uri), null);
            ImagePipelineFactory instance = ImagePipelineFactory.getInstance();
            FileCache mainFileCache = instance.getMainFileCache();
            FileCache smallImageFileCache = instance.getSmallImageFileCache();
            if ((mainFileCache == null || !mainFileCache.hasKey(encodedCacheKey)) && (smallImageFileCache == null || !smallImageFileCache.hasKey(encodedCacheKey))) {
                downloaded = false;
            }
            return downloaded;
        }
    }

    public static File getCachedImageOnDisk(String url) {
        return getCachedImageOnDisk(Uri.parse(url));
    }

    public static File getCachedImageOnDisk(Uri uri) {
        L.d("getCachedImageOnDisk:" + uri.toString());
        if (uri != null) {
            CacheKey encodedCacheKey = DefaultCacheKeyFactory.getInstance().getEncodedCacheKey(ImageRequest.fromUri(uri), null);
            ImagePipelineFactory instance = ImagePipelineFactory.getInstance();
            FileCache mainFileCache = instance.getMainFileCache();
            FileCache smallImageFileCache = instance.getSmallImageFileCache();
            BinaryResource resource = (mainFileCache == null || !mainFileCache.hasKey(encodedCacheKey)) ? (smallImageFileCache == null || !smallImageFileCache.hasKey(encodedCacheKey)) ? null : smallImageFileCache.getResource(encodedCacheKey) : mainFileCache.getResource(encodedCacheKey);
            if (resource instanceof FileBinaryResource) {
                return ((FileBinaryResource) resource).getFile();
            }
        }
        return null;
    }

    public static void clearMemoryCaches() {
        ImagePipelineFactory.getInstance().getImagePipeline().clearMemoryCaches();
    }

    public static void clearDiskCaches() {
        ImagePipelineFactory.getInstance().getImagePipeline().clearDiskCaches();
    }

    public static void clearCaches() {
        ImagePipelineFactory.getInstance().getImagePipeline().clearCaches();
    }

}
