package io.github.yuweiguocn.toutiaoh5.web;

import android.content.Context;
import android.content.MutableContextWrapper;
import android.os.Looper;
import android.os.MessageQueue;
import android.webkit.WebView;

import io.github.yuweiguocn.toutiaoh5.app.App;
import io.github.yuweiguocn.toutiaoh5.utils.L;

import java.util.Stack;

public class PreloadWebView {
    private PreloadWebView(){}

    private static final int CACHED_WEBVIEW_MAX_NUM = 2;
    private static final Stack<WebView> mCachedWebViewStack = new Stack<>();


    public static PreloadWebView getInstance(){
        return Holder.INSTANCE;
    }

    private static class Holder{
        private static final PreloadWebView INSTANCE = new PreloadWebView();
    }

    /**
     * 创建WebView实例
     * 用了applicationContext
     */
    public void preload() {
        L.d("webview preload");
        Looper.myQueue().addIdleHandler(new MessageQueue.IdleHandler() {
            @Override
            public boolean queueIdle() {
                if (mCachedWebViewStack.size() < CACHED_WEBVIEW_MAX_NUM) {
                    mCachedWebViewStack.push(createWebView());
                }
                return false;
            }
        });
    }

    private WebView createWebView() {
        WebView webview = new WebView(new MutableContextWrapper(App.getApp()));
        webview.getSettings().setJavaScriptEnabled(true);
        webview.loadDataWithBaseURL("file:///android_asset/article/?item_id=0&token=0",getHtml(),"text/html","utf-8","file:///android_asset/article/?item_id=0&token=0");
        return webview;
    }

    public static void loadBaseHtml(WebView webView) {
        if (webView == null) {
            return;
        }
        webView.loadDataWithBaseURL("file:///android_asset/article/?item_id=0&token=0",getHtml(),"text/html","utf-8","file:///android_asset/article/?item_id=0&token=0");

    }

    private static String getHtml() {
        StringBuilder builder = new StringBuilder();
        builder.append("<!DOCTYPE html>\n");
        builder.append("<html>\n");
        builder.append("<head>\n");
        builder.append("<meta charset=\"utf-8\">\n");
        builder.append("<meta name=\"viewport\" content=\"initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0, user-scalable=no\">\n");
        builder.append("<link rel=\"stylesheet\" type=\"text/css\" href=\"");
        builder.append("file:///android_asset/article/css/android.css");
        builder.append("\">\n</head>\n");
        builder.append("<body class=\"font_m\"><header></header><article></article><footer></footer>");
        builder.append("<script type=\"text/javascript\" src=\"");
        builder.append("file:///android_asset/article/js/lib.js");
        builder.append("\"></script>");
        builder.append("<script type=\"text/javascript\" src=\"");
        builder.append("file:///android_asset/article/js/android.js");
        builder.append("\" ></script>\n");
        builder.append("</body>\n");
        builder.append("</html>\n");
        return builder.toString();
    }

    /**
     * 从缓存池中获取合适的WebView
     *
     * @param context activity context
     * @return WebView
     */
    public WebView getWebView(Context context) {
        // 为空，直接返回新实例
        if (mCachedWebViewStack == null || mCachedWebViewStack.isEmpty()) {
            WebView web = createWebView();
            MutableContextWrapper contextWrapper = (MutableContextWrapper) web.getContext();
            contextWrapper.setBaseContext(context);
            return web;
        }
        WebView webView = mCachedWebViewStack.pop();
        // webView不为空，则开始使用预创建的WebView,并且替换Context
        MutableContextWrapper contextWrapper = (MutableContextWrapper) webView.getContext();
        contextWrapper.setBaseContext(context);
        return webView;
    }


}
