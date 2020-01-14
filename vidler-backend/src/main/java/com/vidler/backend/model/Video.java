package com.vidler.backend.model;

import com.vidler.backend.model.audit.DateAudit;
import org.hibernate.annotations.NaturalId;
import javax.persistence.*;
import javax.validation.constraints.Email;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Size;

@Entity
public class Video extends DateAudit {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String username;

    @NotBlank
    @Size(max = 100)
    private String title;

    @NotBlank
    @Size(max = 500)
    private String link;

    @NotBlank
    @Size(max = 100)
    private String description;

    @Size(max = 100)
    private String thumbnail;

    private long viewCount;

    public Video(String username, @NotBlank @Size(max = 100) String title, @NotBlank @Size(max = 100) String link, @NotBlank @Size(max = 100) String description, @Size(max = 100) String thumbnail, long viewCount) {
        this.username = username;
        this.title = title;
        this.link = link;
        this.description = description;
        this.thumbnail = thumbnail;
        this.viewCount = viewCount;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getLink() {
        return link;
    }

    public void setLink(String link) {
        this.link = link;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public long getViewCount() {
        return viewCount;
    }

    public void setViewCount(long viewCount) {
        this.viewCount = viewCount;
    }

}