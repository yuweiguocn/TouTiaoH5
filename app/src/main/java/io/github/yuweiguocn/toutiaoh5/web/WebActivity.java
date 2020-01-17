package io.github.yuweiguocn.toutiaoh5.web;

import android.graphics.Bitmap;
import android.net.Uri;
import android.os.Bundle;
import android.os.Handler;
import android.view.ViewGroup;
import android.view.ViewParent;
import android.webkit.ConsoleMessage;
import android.webkit.WebChromeClient;
import android.webkit.WebResourceRequest;
import android.webkit.WebResourceResponse;
import android.webkit.WebSettings;
import android.webkit.WebView;
import android.webkit.WebViewClient;
import android.widget.LinearLayout;

import androidx.annotation.Nullable;
import androidx.appcompat.app.AppCompatActivity;

import io.github.yuweiguocn.toutiaoh5.R;
import io.github.yuweiguocn.toutiaoh5.provider.ImageProvider;
import io.github.yuweiguocn.toutiaoh5.utils.L;
import io.github.yuweiguocn.toutiaoh5.utils.LoadUrlUtils;
import io.github.yuweiguocn.toutiaoh5.utils.TT;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStream;
import java.io.InputStreamReader;

public class WebActivity extends AppCompatActivity {

    private WebView mWebView;
    private Handler mHandler = new Handler();
    private int delay = 100;
    private ImageProvider.ImageListener listener;

    @Override
    protected void onCreate(@Nullable Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_web);
        LinearLayout ll_content = findViewById(R.id.ll_content);
        mWebView = PreloadWebView.getInstance().getWebView(WebActivity.this);
        ll_content.addView(mWebView, new LinearLayout.LayoutParams(ViewGroup.LayoutParams.MATCH_PARENT, ViewGroup.LayoutParams.MATCH_PARENT));
        WebSettings settings = mWebView.getSettings();
        settings.setJavaScriptEnabled(true);
        mWebView.setWebViewClient(new WebViewClient(){
            @Override
            public void onPageStarted(WebView view, String url, Bitmap favicon) {
                super.onPageStarted(view, url, favicon);
                L.d("onPageStarted:  url="+ url);
            }

            @Override
            public void onPageFinished(WebView view, String url) {
                super.onPageFinished(view, url);
                L.d("onPageFinished:  url="+ url);
            }

            @Override
            public boolean shouldOverrideUrlLoading(WebView view, String url) {
                L.d("shouldOverrideUrlLoading: url=" + url);
                return shouldIntercept(view, url);
            }

            @Override
            public boolean shouldOverrideUrlLoading(WebView view, WebResourceRequest request) {
                return shouldOverrideUrlLoading(view, request.getUrl().toString());
            }

            @Nullable
            @Override
            public WebResourceResponse shouldInterceptRequest(WebView view, String url) {
                L.d("shouldInterceptRequest: url="+ url);
                return super.shouldInterceptRequest(view, url);
            }

            @Nullable
            @Override
            public WebResourceResponse shouldInterceptRequest(WebView view, WebResourceRequest request) {
                return shouldInterceptRequest(view,request.getUrl().toString());
            }
        });

        mWebView.setWebChromeClient(new WebChromeClient(){
            @Override
            public boolean onConsoleMessage(ConsoleMessage consoleMessage) {
                L.d("onConsoleMessage:" + consoleMessage.message());
                return super.onConsoleMessage(consoleMessage);
            }
        });
        loadContent(0);
        listener = new ImageProvider.ImageListener() {
            @Override
            public void onLoaded(String groupid, int index, boolean isSuccess) {
                StringBuilder stringBuilder = new StringBuilder();
                stringBuilder.append("javascript:image_load_cb(");
                stringBuilder.append(index);
                stringBuilder.append(", ");
                stringBuilder.append(isSuccess ? "true" : "false");
                stringBuilder.append(", ");
                stringBuilder.append(isSuccess ? "true" : "false");
                stringBuilder.append(")");
                LoadUrlUtils.loadUrl(mWebView, stringBuilder.toString());
            }
        };
        ImageProvider.registerImageListener(listener);
    }

    private void loadContent(long delay) {
        L.d("loadContent:" + delay);
        delay += 100;
        mHandler.postDelayed(new Runnable() {
            @Override
            public void run() {
                LoadUrlUtils.loadUrl(mWebView, getJsContent());
            }
        }, delay);
    }

    private boolean shouldIntercept(WebView webView, String url) {
        if (!url.startsWith("bytedance://") && !url.startsWith("sslocal://")) {
            return false;
        }
        Uri parse = null;
        try {
            parse = Uri.parse(url);
        } catch (Exception e) {
            L.e(e);
        }
        if (parse != null) {
            boolean detectJs="detectJs".equals(parse.getHost());
            boolean setcontent="setContent".equals(parse.getQueryParameter("function"));
            boolean result="false".equals(parse.getQueryParameter("result"));
            if (detectJs && setcontent && result) {
                PreloadWebView.loadBaseHtml(webView);
                loadContent(delay);
            }
            TT.s(parse.getHost());
        }
        return true;
    }


    private String getJsContent() {
        InputStream is = null;
        StringBuilder content = new StringBuilder();
        try {
            is = getAssets().open("jscontent.txt");
            BufferedReader br = new BufferedReader(new InputStreamReader(is));
            String temp;
            while ((temp = br.readLine()) != null) {
                content.append(temp);
            }
        } catch (Exception e) {
            e.printStackTrace();
        }finally {
            if (is != null) {
                try {
                    is.close();
                } catch (IOException e) {
                    e.printStackTrace();
                }
            }
        }
        return content.toString();
    }

    @Override
    protected void onDestroy() {
        super.onDestroy();
        ImageProvider.unregisterImageListener(listener);
        if (mWebView != null){
            ViewParent parent = mWebView.getParent();
            if (parent != null) {
                ((ViewGroup) parent).removeView(mWebView);
            }
            mWebView.removeAllViews();
            mWebView.destroy();
            mWebView = null;
        }
    }
}
