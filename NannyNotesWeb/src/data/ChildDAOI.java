package data;

import java.util.Collection;
import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import org.springframework.transaction.annotation.Transactional;
import entities.Child;

@Transactional
public class ChildDAOI implements ChildDAO {

	@PersistenceContext
	private EntityManager em;
	
	@Override
	public Collection<Child> index() {
		String query = "Select c FROM Child c";
		return em.createQuery(query, Child.class).getResultList();
	}

	@Override
	public Child show(int id) {
		return em.find(Child.class, id);

	}

	@Override
	public Child update(int id, Child child) {
		child.setId(id);
		em.merge(child);
		return em.find(Child.class, id);
	}

	@Override
	public Child create(Child child) {
		em.persist(child);
		em.flush();
		return em.find(Child.class, child.getId());
	}

	@Override
	public Child delete(int id) {
		Child child;
		if ((child = em.find(Child.class, id)) != null) {
			em.remove(child);
			return child;
		} else
			return null;
	}

}
