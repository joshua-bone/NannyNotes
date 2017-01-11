package controllers;

import java.io.IOException;
import java.util.Collection;
import java.util.HashMap;
import java.util.Map;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.fasterxml.jackson.databind.ObjectMapper;

import data.UserDAO;
import entities.User;
import security.JsonWebTokenGenerator;

@RestController
public class AuthenticationController {
	// inject autowired bCrypt bean
	@Autowired
	JsonWebTokenGenerator jwtGen;
	
	@Autowired
	UserDAO userDao;
	
	@RequestMapping(value="ping", method=RequestMethod.GET)
	public String ping(){
		return "pong";
	}
	
	@RequestMapping(path="users", method=RequestMethod.GET)
	public Collection<User> index(){
	  return userDao.index();
	}
	
	@RequestMapping(path="users/{id}", method=RequestMethod.GET)
	public User show(@PathVariable int id){
	  return userDao.show(id);
	}
	
	@RequestMapping(path="users/{id}", method=RequestMethod.PUT)
	public User update(@PathVariable int id, @RequestBody String jsonUser){
		ObjectMapper mapper = new ObjectMapper();
		User user = null;
		try {
		  user = mapper.readValue(jsonUser, User.class);
		} catch (Exception e) {
		  e.printStackTrace();
		}
		return userDao.update(id, user);
	}
	
	@RequestMapping(path="users", method=RequestMethod.POST)
	public User create(@RequestBody String jsonUser){
		ObjectMapper mapper = new ObjectMapper();
		User newUser = null;
		try {
		  newUser = mapper.readValue(jsonUser, User.class);
		} catch (Exception e) {
		  e.printStackTrace();
		}
		return userDao.create(newUser);
	}
	
	@RequestMapping(path="users/{id}", method=RequestMethod.DELETE)
	public void delete(@PathVariable int id){
		userDao.delete(id);
	}

	@RequestMapping(value = "/register", method = RequestMethod.POST)
	public Map<String,String> register(HttpServletRequest req, HttpServletResponse res, @RequestBody String userJson) {
	    ObjectMapper mapper = new ObjectMapper();
	    User user = null;
	    try {
	      user = mapper.readValue(userJson, User.class);
	    } catch (IOException ie) {
	      ie.printStackTrace();
	    }
	    user = userDao.create(user);
	    String jws = jwtGen.generateUserJwt(user);
	    Map<String,String> responseJson = new HashMap<>();
	    responseJson.put("token", jws);
	    return responseJson;
	}
	
	@RequestMapping(value = "/login", method = RequestMethod.POST)
	public Map<String,String> login(HttpServletRequest req, HttpServletResponse res, @RequestBody String userJsonString) {
	    ObjectMapper mapper = new ObjectMapper();
	    User user = null;
	    // Parse User from JSON
	    try {
	      user = mapper.readValue(userJsonString, User.class);
	    } catch (Exception e) {
	      e.printStackTrace();
	    }
	    // Find managed User, return it if password is correct
	    try {
	      user = userDao.authenticateUser(user);
	    } catch (Exception e) {
	      // User not authenticated
	      e.printStackTrace();
	      res.setStatus(401);
	      return null;
	    }

	    // Create encoded JWT for User
	    String jws = jwtGen.generateUserJwt(user);
	    Map<String, String> responseJson = new HashMap<>();
	    responseJson.put("token", jws);
	    return responseJson;
	  }
	  

}