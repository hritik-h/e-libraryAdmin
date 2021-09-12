package com.elibrary.adminside.controller;

import com.elibrary.adminside.entities.Book;
import com.elibrary.adminside.service.BookService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/admin")
@CrossOrigin("http://localhost:3000/")
public class AdminController {
    @Autowired
    BookService bookService;
    @PostMapping("/add-books")
    public String hello(@RequestBody Book book){
        bookService.add(book);
        return "Done Adding Books";
    }

    @DeleteMapping("/delete-books/{bookId}")
    public String delete(@PathVariable("bookId") long bookId){
        bookService.delete(bookId);
        return "Done Deleting Books";
    }

    @GetMapping("/get-book/{bookId}")
    public Optional<Book> getBook(@PathVariable("bookId") long bookId){
        return bookService.getBook(bookId);
    }
    @PutMapping("/update-book/{bookId}")
    public String update(@PathVariable("bookId") long bookId, @RequestBody Book book){
        bookService.update(bookId,book);
        return "Done Updating Books";
    }

    @GetMapping("/books")
    public List<Book> GetBooks(){
        return bookService.GetAll();
    }


}

