package entities;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;

@Entity
public class Child {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int id;
	private String name;
	private int age;

	@ManyToOne
	@JoinColumn(name = "household_id")
	private Household household;

	private int parentNotes;
	private int nannyNotes;

	public Child() {
	}

	public Child(int id, String name, int age, Household household, int parentNotes, int nannyNotes) {
		this.id = id;
		this.name = name;
		this.age = age;
		this.household = household;
		this.parentNotes = parentNotes;
		this.nannyNotes = nannyNotes;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public int getAge() {
		return age;
	}

	public void setAge(int age) {
		this.age = age;
	}

	public Household getHousehold() {
		return household;
	}

	public void setHousehold(Household household) {
		this.household = household;
	}

	public int getParentNotes() {
		return parentNotes;
	}

	public void setParentNotes(int parentNotes) {
		this.parentNotes = parentNotes;
	}

	public int getNannyNotes() {
		return nannyNotes;
	}

	public void setNannyNotes(int nannyNotes) {
		this.nannyNotes = nannyNotes;
	}

	public int getId() {
		return id;
	}

	@Override
	public String toString() {
		return "Child [id=" + id + ", name=" + name + ", age=" + age + ", household=" + household + ", parentNotes="
				+ parentNotes + ", nannyNotes=" + nannyNotes + "]";
	}

}
