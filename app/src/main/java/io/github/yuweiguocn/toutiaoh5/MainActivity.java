package io.github.yuweiguocn.toutiaoh5;

import android.content.Intent;
import android.os.Bundle;
import android.view.View;

import androidx.appcompat.app.AppCompatActivity;

import com.google.gson.reflect.TypeToken;
import io.github.yuweiguocn.toutiaoh5.app.App;
import io.github.yuweiguocn.toutiaoh5.bean.ArticleImage;
import io.github.yuweiguocn.toutiaoh5.utils.FrescoUtils;
import io.github.yuweiguocn.toutiaoh5.web.WebActivity;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStream;
import java.io.InputStreamReader;
import java.lang.reflect.Type;
import java.util.ArrayList;
import java.util.List;

public class MainActivity extends AppCompatActivity {

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);
        findViewById(R.id.btn_web).setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                startActivity(new Intent(MainActivity.this, WebActivity.class));
            }
        });

//        preloadImage();
    }

    private void preloadImage() {
        Type imagesType = new TypeToken<ArrayList<ArticleImage>>(){}.getType();
        List<ArticleImage> images= App.getGson().fromJson(getArticleImage(), imagesType);
        for (int i = 0; i < images.size(); i++) {
            download(images.get(i).url);
            List<ArticleImage.ImageUrl> list = images.get(i).url_list;
            for (int j = 0; j < list.size(); j++) {
                download(list.get(j).url);
            }
        }
    }

    private void download(String url) {
        FrescoUtils.downLoadImage(url);
    }


    private String getArticleImage() {
        InputStream is = null;
        StringBuilder content = new StringBuilder();
        try {
            is = getAssets().open("image.json");
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

}
