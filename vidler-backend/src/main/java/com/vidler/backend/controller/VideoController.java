package com.vidler.backend.controller;

import com.vidler.backend.model.AmazonClient;
import com.vidler.backend.model.Video;
import com.vidler.backend.payload.VideoCreateRequest;
import com.vidler.backend.repository.VideoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/video/")
public class VideoController {

    private AmazonClient amazonClient;

    @Autowired
    VideoRepository videoRepository;

    @Autowired
    VideoController(AmazonClient amazonClient) {
        this.amazonClient = amazonClient;
    }

    @PostMapping(value="/uploadVideo")
    public String uploadFile(@ModelAttribute VideoCreateRequest videoCreateRequest) {
        String link = this.amazonClient.uploadFile(videoCreateRequest.getFile());

        Video video = new Video(videoCreateRequest.getUsername(), videoCreateRequest.getTitle(),
                            link, videoCreateRequest.getDescription(),
                            videoCreateRequest.getThumbnail(), 0);

        videoRepository.save(video);

        return "Successful";
    }

}
