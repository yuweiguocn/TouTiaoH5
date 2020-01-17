package io.github.yuweiguocn.toutiaoh5.utils;

import android.os.HandlerThread;
import android.os.Message;

import com.facebook.cache.common.CacheEvent;
import com.facebook.cache.common.CacheEventListener;
import com.facebook.cache.common.CacheKey;

import java.util.Iterator;

public class MyCacheEventListener implements WeakHandler.IHandler, CacheEventListener {
    private static final int ADD_LISTENER = 1;
    private static final int REMOVE_LISTENER = 2;
    private static final int WRITE_EXCEPTION = 4;
    private static final int WRITE_SUCCESS = 3;
    private static MyCacheEventListener sInstance;
    private WeakContainer<OnDiskCacheListener> mContainer = new WeakContainer();
    private WeakHandler mHandler;

    public interface OnDiskCacheListener {
        void onWriteException(CacheKey cacheKey);

        void onWriteSuccess(CacheKey cacheKey);
    }

    public void onCleared() {
    }

    public void onEviction(CacheEvent cacheEvent) {
    }

    public void onHit(CacheEvent cacheEvent) {
    }

    public void onMiss(CacheEvent cacheEvent) {
    }

    public void onReadException(CacheEvent cacheEvent) {
    }

    public void onWriteAttempt(CacheEvent cacheEvent) {
    }

    public void handleMsg(Message message) {
        Iterator it;
        OnDiskCacheListener onDiskCacheListener;
        if (message.what == 1) {
            if (this.mContainer == null) {
                this.mContainer = new WeakContainer();
            }
            if ((message.obj instanceof OnDiskCacheListener) && !this.mContainer.contains((OnDiskCacheListener) message.obj)) {
                this.mContainer.add((OnDiskCacheListener) message.obj);
            }
        } else if (message.what == 2) {
            if (this.mContainer == null) {
                this.mContainer = new WeakContainer();
            }
            if (message.obj instanceof OnDiskCacheListener) {
                this.mContainer.remove((OnDiskCacheListener) message.obj);
            }
        } else if (message.what == 3) {
            if (this.mContainer != null && (message.obj instanceof CacheKey)) {
                it = this.mContainer.iterator();
                while (it.hasNext()) {
                    onDiskCacheListener = (OnDiskCacheListener) it.next();
                    if (onDiskCacheListener != null) {
                        onDiskCacheListener.onWriteSuccess((CacheKey) message.obj);
                    }
                }
            }
        } else if (message.what == 4 && this.mContainer != null && (message.obj instanceof CacheKey)) {
            it = this.mContainer.iterator();
            while (it.hasNext()) {
                onDiskCacheListener = (OnDiskCacheListener) it.next();
                if (onDiskCacheListener != null) {
                    onDiskCacheListener.onWriteException((CacheKey) message.obj);
                }
            }
        }
    }

    private MyCacheEventListener() {
        HandlerThread handlerThread = new HandlerThread("Image-Sync-HandlerThread");
        handlerThread.start();
        this.mHandler = new WeakHandler(handlerThread.getLooper(), this);
    }

    public static synchronized MyCacheEventListener getInstance() {
        synchronized (MyCacheEventListener.class) {
            MyCacheEventListener CacheEventListener;
            if (sInstance == null) {
                sInstance = new MyCacheEventListener();
            }
            CacheEventListener = sInstance;
            return CacheEventListener;
        }
    }

    public void registerOnDiskCacheListener(OnDiskCacheListener onDiskCacheListener) {
        this.mHandler.sendMessage(this.mHandler.obtainMessage(1, onDiskCacheListener));
    }

    public void unregisterOnDiskCacheListener(OnDiskCacheListener onDiskCacheListener) {
        this.mHandler.sendMessage(this.mHandler.obtainMessage(2, onDiskCacheListener));
    }

    public void onWriteSuccess(CacheEvent cacheEvent) {
        this.mHandler.sendMessage(this.mHandler.obtainMessage(3, cacheEvent != null ? cacheEvent.getCacheKey() : null));
    }

    public void onWriteException(CacheEvent cacheEvent) {
        this.mHandler.sendMessage(this.mHandler.obtainMessage(4, cacheEvent != null ? cacheEvent.getCacheKey() : null));
    }
}
