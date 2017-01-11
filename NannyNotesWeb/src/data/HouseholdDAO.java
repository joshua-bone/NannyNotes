package data;

import java.util.Collection;
<<<<<<< HEAD
import entities.Household;

public interface HouseholdDAO {

	public Collection<Household> index();



=======


import entities.Household;

public interface HouseholdDAO {
	public Collection<Household> index();

	public Household show(int id);

	public Household create(Household household);

	public Household update(int id, Household household);

	public Household delete(int id);
>>>>>>> 7014e5777d10968fa5f0702b7250c72b9de5406b
}
