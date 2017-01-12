package controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import data.ChildDAO;
import data.HouseholdDAO;
import data.UserDAO;
import random.RDG;
import security.JsonWebTokenGenerator;

@RestController
public class RandomGeneratorController {
	// inject autowired bCrypt bean
	@Autowired
	JsonWebTokenGenerator jwtGen;
	
	@Autowired
	HouseholdDAO householdDAO;
	@Autowired
	UserDAO userDAO;
	@Autowired
	ChildDAO childDAO;
	
//	@RequestMapping(path="generate", method=RequestMethod.GET)
//	public void generate(){
//		RDG.generateHouseholds(householdDAO, userDAO, childDAO);
//	}
}
