package data;

import java.util.Collection;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;

import entities.Shift;

public class ShiftDAOI implements ShiftDAO {

	@PersistenceContext
	private EntityManager em;

	@Override
	public Collection<Shift> index() {
		String query = "Select s FROM Shift s";
		return em.createQuery(query, Shift.class).getResultList();
	}

	@Override
	public Shift show(int id) {
		return em.find(Shift.class, id);

	}

	@Override
	public Shift update(int id, Shift shift) {
		shift.setId(id);
		em.merge(shift);
		return em.find(Shift.class, id);
	}

	@Override
	public Shift create(Shift newShift) {
		em.persist(newShift);
		em.flush();
		return em.find(Shift.class, newShift.getId());
	}

	@Override
	public Shift delete(int id) {
		Shift shift;
		if ((shift = em.find(Shift.class, id)) != null) {
			em.remove(shift);
			return shift;
		} else
			return null;
	}

}
