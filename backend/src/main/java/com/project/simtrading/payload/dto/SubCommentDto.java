package com.project.simtrading.payload.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.validation.constraints.NotEmpty;
import javax.validation.constraints.Size;
import java.util.Set;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class SubCommentDto {
    private Long id;
    @NotEmpty(message = "Body should not be null or empty")
    @Size(min = 1, message = "Comment body should be more than 1 char")
    private String body;
}
