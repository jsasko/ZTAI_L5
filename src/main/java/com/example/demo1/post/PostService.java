package com.example.demo1.post;

import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class PostService {

    private static List<Post> posts = new ArrayList<>();
    private static Long idCounter=0L;

    static{
        for(int i=0;i<10;i++) {
            posts.add(new Post(++idCounter,
                    "title1",
                    "http://osnews.pl/wp-content/uploads/2016/06/it-grafika.jpg",
                    "Bacon ipsum dolor amet filet mignon drumstick picanha ribeye jerky pork belly cupim tail boudin" +
                            " turducken porchetta kielbasa hamburger pancetta pork chop. Doner meatball kielbasa kevin swine." +
                            " Andouille shankle brisket filet mignon ball tip, cupim chicken swine tail shank t-bone. " +
                            "Drumstick pig tenderloin, chicken pork belly ribeye picanha pork chop alcatra t-bone strip "));
        }
    }

    List<Post> getAll(){
        return posts;
    }
    Post get(int id){
        return posts.get(id);
    }
}