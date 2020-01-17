package io.github.yuweiguocn.toutiaoh5.utils;

import java.util.ArrayList;
import java.util.Iterator;
import java.util.WeakHashMap;

public class WeakContainer<E> implements Iterable<E> {
    private final WeakHashMap<E, Object> mMap = new WeakHashMap();
    private final Object mValue = new Object();

    public void add(E e) {
        if (e == null) {
            this.mMap.size();
        } else {
            this.mMap.put(e, this.mValue);
        }
    }

    public void clear() {
        this.mMap.clear();
    }

    public boolean isEmpty() {
        return mMap.isEmpty();
    }

    public int size() {
        return mMap.size();
    }

    public void remove(E e) {
        if (e == null) {
            this.mMap.size();
        } else {
            this.mMap.remove(e);
        }
    }

    public E peek() {
        E obj = null;
        if (this.mMap.size() == 0) {
            return null;
        }
        for (E next : this.mMap.keySet()) {
            if (next != null) {
                obj = next;
                break;
            }
        }
        this.mMap.remove(obj);
        return obj;
    }

    public Iterator<E> iterator() {
        ArrayList arrayList = new ArrayList(this.mMap.size());
        for (Object next : this.mMap.keySet()) {
            if (next != null) {
                arrayList.add(next);
            }
        }
        return arrayList.iterator();
    }

    public boolean contains(E e) {
        return this.mMap.containsKey(e);
    }
}
