package com.vidler.backend.repository;

import com.vidler.backend.model.User;
import com.vidler.backend.model.Video;
import org.springframework.data.jpa.repository.JpaRepository;

public interface VideoRepository extends JpaRepository<Video, Long> {
}
