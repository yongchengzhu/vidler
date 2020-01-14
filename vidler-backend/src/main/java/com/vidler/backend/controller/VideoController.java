package com.vidler.backend.controller;


import com.vidler.backend.model.Video;
import com.vidler.backend.payload.VideoCreateRequest;
import com.vidler.backend.repository.VideoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;


@RestController
@RequestMapping("/video/")
public class VideoController {

    @Autowired
    VideoRepository videoRepository;

    @PostMapping(value="/uploadVideo")
    public String uploadFile(@RequestBody VideoCreateRequest videoCreateRequest) {
        //TODO
        //IMPLEMENT INSERTION INTO LOCAL DB
        Video video = new Video(videoCreateRequest.getUsername(), videoCreateRequest.getTitle(),
                            videoCreateRequest.getLink(), videoCreateRequest.getDescription(),
                            videoCreateRequest.getThumbnail(), 0);

        Video videoResult = videoRepository.save(video);

        return "Successful";
    }

}
