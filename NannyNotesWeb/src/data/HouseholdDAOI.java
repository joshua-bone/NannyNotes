package data;

import java.util.Collection;
<<<<<<< HEAD
import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import org.springframework.transaction.annotation.Transactional;
import entities.Household;

@Transactional
public class HouseholdDAOI implements HouseholdDAO{

	@PersistenceContext
	private EntityManager em;
	
=======

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;

import org.springframework.transaction.annotation.Transactional;

import entities.Household;

@Transactional
public class HouseholdDAOI implements HouseholdDAO {

	@PersistenceContext
	private EntityManager em;

>>>>>>> 7014e5777d10968fa5f0702b7250c72b9de5406b
	@Override
	public Collection<Household> index() {
		String query = "Select h FROM Household h";
		return em.createQuery(query, Household.class).getResultList();
	}

<<<<<<< HEAD
=======
	@Override
	public Household show(int id) {
		return em.find(Household.class, id);
	}

	@Override
	public Household create(Household household) {
		em.persist(household);
		em.flush();
		return em.find(Household.class, household.getId());
	}

	@Override
	public Household update(int id, Household householdJson) {
		Household oldHousehold = em.find(Household.class, id);
		oldHousehold.setName(householdJson.getName());
		oldHousehold.setUsers(householdJson.getUsers());
		oldHousehold.setNannyNotes(householdJson.getNannyNotes());
		oldHousehold.setParentNotes(householdJson.getParentNotes());
		oldHousehold.setChildren(householdJson.getChildren());
		oldHousehold.setShifts(householdJson.getShifts());
		em.persist(oldHousehold);
		em.flush();
		return oldHousehold;
	}

	@Override
	public Household delete(int id) {
		Household household;
		if ((household = em.find(Household.class, id)) != null) {
			em.remove(household);
			return household;
		} else
			return null;
	}

>>>>>>> 7014e5777d10968fa5f0702b7250c72b9de5406b
}
