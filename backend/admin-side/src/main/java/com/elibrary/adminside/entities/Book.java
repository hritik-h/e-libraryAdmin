package com.elibrary.adminside.entities;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Lob;
import java.sql.Date;
import java.util.Arrays;

@Entity
public class Book {
    @Id
    @GeneratedValue
    private Long id;
    private String title;
    private String author;
    private String edition;
    private double price;
    private String type;
    private String publishDate;
    private Integer totalNumber;
    private String description;

    public void setId(Long id) {
        this.id = id;
    }

    @Lob
    private byte[] coverpic;
    @Lob
    private byte[] image1;
    @Lob
    private byte[] image2;
    @Lob
    private byte[] image3;

    public byte[] getImage1() {
        return image1;
    }

    public void setImage1(byte[] image1) {
        this.image1 = image1;
    }

    public byte[] getImage2() {
        return image2;
    }

    public void setImage2(byte[] image2) {
        this.image2 = image2;
    }

    public byte[] getImage3() {
        return image3;
    }

    public void setImage3(byte[] image3) {
        this.image3 = image3;
    }

    public byte[] getImage4() {
        return image4;
    }

    public void setImage4(byte[] image4) {
        this.image4 = image4;
    }

    @Lob
    private byte[] image4;

    public Book(String title, String author, String edition, double price, String type, String publishDate, Integer totalNumber, String description, byte[] coverpic, byte[] image1, byte[] image2, byte[] image3, byte[] image4) {
        this.title = title;
        this.author = author;
        this.edition = edition;
        this.price = price;
        this.type = type;
        this.publishDate = publishDate;
        this.totalNumber = totalNumber;
        this.description = description;
        this.coverpic = coverpic;
        this.image1 = image1;
        this.image2 = image2;
        this.image3 = image3;
        this.image4 = image4;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getAuthor() {
        return author;
    }

    public void setAuthor(String author) {
        this.author = author;
    }

    public String getEdition() {
        return edition;
    }

    public void setEdition(String edition) {
        this.edition = edition;
    }

    public Double getPrice() {
        return price;
    }

    public void setPrice(Double price) {
        this.price = price;
    }

    public void setPrice(double price) {
        this.price = price;
    }

    public String getIsEbook() {
        return type;
    }

    @Override
    public String toString() {
        return "Book{" +
                "id=" + id +
                ", title='" + title + '\'' +
                ", author='" + author + '\'' +
                ", edition='" + edition + '\'' +
                ", price=" + price +
                ", type='" + type + '\'' +
                ", publishDate='" + publishDate + '\'' +
                ", totalNumber=" + totalNumber +
                ", description='" + description + '\'' +
                ", coverpic=" + Arrays.toString(coverpic) +
                ", image1=" + Arrays.toString(image1) +
                ", image2=" + Arrays.toString(image2) +
                ", image3=" + Arrays.toString(image3) +
                ", image4=" + Arrays.toString(image4) +
                '}';
    }

    public void setEbook(String ebook) {
        type = ebook;
    }

    public String getPublishDate() {
        return publishDate;
    }

    public void setPublishDate(String publishDate) {
        this.publishDate = publishDate;
    }

    public Integer getTotalNumber() {
        return totalNumber;
    }

    public void setTotalNumber(Integer totalNumber) {
        this.totalNumber = totalNumber;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public byte[] getCoverpic() {
        return coverpic;
    }

    public void setCoverpic(byte[] coverpic) {
        this.coverpic = coverpic;
    }

    public Book() {
    }
}
