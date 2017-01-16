package data;

import java.util.Collection;

import javax.persistence.NoResultException;

import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;

import entities.User;

public interface UserDAO {

	public User create(User user);

	public User authenticateUser(User user) throws NoResultException;

	public Collection<User> index();
	public Collection<User> index(int hhid);

	public User show(int id);

	public User update(int id, User user);

	public User delete(int id);
	
	public BCryptPasswordEncoder getPasswordEncoder();
	
}
