package data;

import java.util.Collection;

import javax.persistence.EntityManager;
import javax.persistence.NoResultException;
import javax.persistence.PersistenceContext;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.transaction.annotation.Transactional;

import entities.Child;
import entities.User;

@Transactional
public class UserDAOI implements UserDAO {

	@PersistenceContext
	private EntityManager em;

	@Autowired
	public BCryptPasswordEncoder passwordEncoder;

	@Override
	public Collection<User> index() {
		String query = "Select u FROM User u";
		return em.createQuery(query, User.class).getResultList();
	}
	
	@Override
	public Collection<User> index(int id) {
		//String query = "Select u FROM User u INNER JOIN user_household uh ON u.id = uh.user.id AND = uh.household.id = ?1";
		String query = "SELECT u FROM User u JOIN u.households h ON h.id = :id";
		return em.createQuery(query, User.class).setParameter("id", id).getResultList();
	}
	
	@Override
	public User show(int id) {
		return em.find(User.class, id);
	}
	
	@Override
	public User update(int id, User user) {
		user.setId(id);
		em.merge(user);
		return em.find(User.class, id);
	}
	
	@Override
	public User create(User user) {
		// extract raw password
		String rawPassword = user.getPassword();
		// encode raw password
		String encodedPassword = passwordEncoder.encode(rawPassword);
		// reset the user's password to the encoded one
		user.setPassword(encodedPassword);
		// persist the user
		em.persist(user);
		// force EntityManager to persist immediately
		em.flush();
		// return the persisted user
		return em.find(User.class, user.getId());
	}

	@Override
	public User authenticateUser(User user) throws NoResultException {
		// find the User by username
		User u = em.createQuery("SELECT u FROM User u WHERE username = :username", User.class).setParameter("username", user.getUsername()).getSingleResult();
		if (passwordEncoder.matches(user.getPassword(), u.getPassword())) {
			return u;
		}
		return null;
	}
	
	@Override
	public User delete(int id) {
		User user;
		if((user = em.find(User.class, id)) != null) { em.remove(user); return user;}
		else return null;
	}

	@Override
	public BCryptPasswordEncoder getPasswordEncoder() {
		return passwordEncoder;
	}

}
