package controllers;

import java.util.Collection;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.fasterxml.jackson.databind.ObjectMapper;

import data.HouseholdDAO;
import entities.Household;

@RestController
public class HouseholdController {

	@Autowired
	HouseholdDAO householdDao;
	
	@RequestMapping(value="household/ping", method=RequestMethod.GET)
	public String ping(){
		return "pong";
	}
	
	@RequestMapping(path="household", method=RequestMethod.GET)
	public Collection<Household> index(){
	  return householdDao.index();
	}
	
	@RequestMapping(path="households/{id}", method=RequestMethod.GET)
	public Household show(@PathVariable int id){
	  return householdDao.show(id);
	}
	
	@RequestMapping(path="households/{id}", method=RequestMethod.PUT)
	public Household update(@PathVariable int id, @RequestBody Household household){
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
