package controllers;

import java.util.Collection;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;
import com.fasterxml.jackson.databind.ObjectMapper;
import data.ChildDAO;
import entities.Child;

@RestController
public class ChildController {

	@Autowired
	ChildDAO childDao;
	
	@RequestMapping(value="children/ping", method=RequestMethod.GET)
	public String ping(){
		return "pong";
	}

	@RequestMapping(path="children", method=RequestMethod.GET)
	public Collection<Child> index(){
	  return childDao.index();
	}
	
	@RequestMapping(path="children/{id}", method=RequestMethod.GET)
	public Child show(@PathVariable int id){
	  return childDao.show(id);
	}
	
	@RequestMapping(path="children/{id}", method=RequestMethod.PUT)
	public Child update(@PathVariable int id, @RequestBody String jsonChild){
		ObjectMapper mapper = new ObjectMapper();
		Child child = null;
		try {
		  child = mapper.readValue(jsonChild, Child.class);
		} catch (Exception e) {
		  e.printStackTrace();
		}
		return childDao.update(id, child);
	}
	
	@RequestMapping(path="children", method=RequestMethod.POST)
	public Child create(@RequestBody String jsonChild){
		ObjectMapper mapper = new ObjectMapper();
		System.out.println(jsonChild);
		Child child = null;
		try {
		  child = mapper.readValue(jsonChild, Child.class);
		} catch (Exception e) {
		  e.printStackTrace();
		}
		return childDao.create(child);
	}
	
	@RequestMapping(path="children/{id}", method=RequestMethod.DELETE)
	public void delete(@PathVariable int id){
		childDao.delete(id);
	}

}
