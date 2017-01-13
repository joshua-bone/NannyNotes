package data;

import java.util.Collection;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;

import org.springframework.transaction.annotation.Transactional;

import entities.Household;
import entities.User;

@Transactional
public class HouseholdDAOI implements HouseholdDAO{

	@PersistenceContext
	private EntityManager em;
	
	@Override
	public Collection<Household> index() {
		String query = "Select h FROM Household h";
		return em.createQuery(query, Household.class).getResultList();
	}

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
	public Household update(int id, Household household) {
		household.setId(id);
		em.merge(household);
		return em.find(Household.class, id);
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

}
