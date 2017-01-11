package controllers;

import java.util.Collection;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;
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

}
