package io.github.yuweiguocn.toutiaoh5.utils;

import android.util.Base64;

import java.util.zip.Inflater;

public class ZipUtils {

    private ZipUtils(){}

    static final byte[] buffer = new byte[4096];
    public static final String unzip(String str) {
        try {
            Inflater inflater = new Inflater();
            inflater.setInput(Base64.decode(str, 8));
            int size = inflater.inflate(buffer);
            inflater.end();
            String temp = new String(buffer, 0, size, "UTF-8");
            L.d("unzip:" + temp);
            return temp;
        } catch (Exception e) {
            e.printStackTrace();
        }
        return "";
    }


}
