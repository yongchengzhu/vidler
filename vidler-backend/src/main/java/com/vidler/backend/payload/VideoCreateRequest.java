package com.vidler.backend.payload;

import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Size;

import org.springframework.web.multipart.MultipartFile;

public class VideoCreateRequest {
  private MultipartFile file;

  @NotBlank
  @Size(min = 3, max = 40)
  private String username;

  @NotBlank
  @Size(max = 40)
  private String title;

  @NotBlank
  @Size(max = 500)
  private String link;

  @NotBlank
  @Size(max = 100)
  private String description;

  @NotBlank
  @Size(max = 100)
  private String thumbnail;

  public String getUsername() {
    return username;
  }

  public MultipartFile getFile() {
    return file;
  }

  public void setFile(MultipartFile file) {
    this.file = file;
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

  public String getThumbnail() {
      return thumbnail;
  }

  public void setThumbnail(String thumbnail) {
      this.thumbnail = thumbnail;
  }
}
