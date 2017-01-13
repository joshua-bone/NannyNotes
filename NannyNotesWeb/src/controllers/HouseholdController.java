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
import data.HouseholdDAO;
import data.UserDAO;
import entities.Child;
import entities.Household;

@RestController
public class HouseholdController {

	@Autowired
	HouseholdDAO householdDao;
	
	@Autowired
	ChildDAO childDao;
	
	@Autowired
	UserDAO userDao;
	
	@RequestMapping(value="households/ping", method=RequestMethod.GET)
	public String ping(){
		return "pong";
	}
	
	@RequestMapping(path="households", method=RequestMethod.GET)
	public Collection<Household> index(){
	  return householdDao.index();
	}
	
	@RequestMapping(path="households/{id}", method=RequestMethod.GET)
	public Household show(@PathVariable int id){
	  return householdDao.show(id);
	}
	
	@RequestMapping(path="households/{id}/children", method=RequestMethod.GET)
	public Collection<Child> showChildren(@PathVariable int id){
	  return childDao.index(id);
	}
	
//	@RequestMapping(path="households/{id}/users", method=RequestMethod.GET)
//	public Collection<Users> showUsers(@PathVariable int id){
//	  return userDao.index(id);
//	}
	
	@RequestMapping(path="households/{id}", method=RequestMethod.PUT)
	public Household update(@PathVariable int id, @RequestBody String jsonhousehold){
		ObjectMapper mapper = new ObjectMapper();
		Household household = null;
		try {
		  household = mapper.readValue(jsonhousehold, Household.class);
		} catch (Exception e) {
		  e.printStackTrace();
		}		
		return householdDao.update(id, household);
	}
	
	@RequestMapping(path="households", method=RequestMethod.POST)
	public Household create(@RequestBody String jsonHousehold){
		ObjectMapper mapper = new ObjectMapper();
		Household newHousehold = null;
		try {
		  newHousehold = mapper.readValue(jsonHousehold, Household.class);
		} catch (Exception e) {
		  e.printStackTrace();
		}
		return householdDao.create(newHousehold);
	}
	
	@RequestMapping(path="households/{id}", method=RequestMethod.DELETE)
	public void delete(@PathVariable int id){
		householdDao.delete(id);
	}
}
