package data;

import java.util.Collection;
import entities.Household;


public interface HouseholdDAO {
	public Collection<Household> index();

	public Household show(int id);

	public Household create(Household household);

	public Household update(int id, Household household);

	public Household delete(int id);
}
