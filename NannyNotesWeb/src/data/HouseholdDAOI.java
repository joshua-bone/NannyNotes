package data;

import java.util.Collection;
import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import org.springframework.transaction.annotation.Transactional;
import entities.Household;

@Transactional
public class HouseholdDAOI implements HouseholdDAO{

	@PersistenceContext
	private EntityManager em;
	
	@Override
	public Collection<Household> index() {
		String query = "Select h FROM Household h";
		return em.createQuery(query, Household.class).getResultList();
	}

}
