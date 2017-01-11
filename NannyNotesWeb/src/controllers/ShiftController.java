package controllers;


import java.util.Collection;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.fasterxml.jackson.databind.ObjectMapper;

import data.ShiftDAO;
import entities.Household;
import entities.Shift;

@RestController
public class ShiftController {

	@Autowired
	ShiftDAO shiftDao;
	

	@RequestMapping(path="shift", method=RequestMethod.GET)
	public Collection<Shift> index(){
	  return shiftDao.index();
	}
	
	@RequestMapping(path="shifts/{id}", method=RequestMethod.GET)
	public Shift show(@PathVariable int id){
	  return shiftDao.show(id);
	}
	
	@RequestMapping(path="shifts/{id}", method=RequestMethod.PUT)
	public Shift update(@PathVariable int id, @RequestBody Shift shift){
		return shiftDao.update(id, shift);
	}
	
	@RequestMapping(path="shifts", method=RequestMethod.POST)
	public Shift create(@RequestBody String jsonShift){
		ObjectMapper mapper = new ObjectMapper();
		Shift newShift = null;
		try {
		  newShift = mapper.readValue(jsonShift, Shift.class);
		} catch (Exception e) {
		  e.printStackTrace();
		}
		return shiftDao.create(newShift);
	}
	
	@RequestMapping(path="shifts/{id}", method=RequestMethod.DELETE)
	public void delete(@PathVariable int id){
		shiftDao.delete(id);
	}
}
