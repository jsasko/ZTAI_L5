package com.example.demo1.post;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
@RequestMapping("api/posts")
public class PostController {

    @Autowired
    private PostService service;

    @GetMapping
    public List<Post> getAll(){
        return service.getAll();
    }

    @GetMapping("{id}")
    public Post get(@PathVariable int id){
        return service.get(id);
    }
}
