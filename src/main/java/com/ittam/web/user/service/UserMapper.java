package com.ittam.web.user.service;

import com.ittam.web.command.UserVO;
import org.apache.ibatis.annotations.Mapper;

import java.util.ArrayList;

@Mapper
public interface UserMapper {

    public ArrayList<UserVO> passwordFind(String email);

}
