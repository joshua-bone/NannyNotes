package entities;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;

@Entity
public class Shift {

	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	private int id;
	
//	@ManyToOne
	@JoinColumn(name = "user_id")
	private User user;
	
	@ManyToOne
	@JoinColumn(name = "household_id")
	private Household household;
	private String nannyNotes;
	private String parentNotes;
	
	public Shift(){}
	
	public Shift(int id, User user, Household household, String nannyNotes, String parentNotes) {
		this.id = id;
		this.user = user;
		this.household = household;
		this.nannyNotes = nannyNotes;
		this.parentNotes = parentNotes;
	}
	public User getUser() {
		return user;
	}
	public void setUser(User user) {
		this.user = user;
	}
	public Household getHousehold() {
		return household;
	}
	public void setHousehold(Household household) {
		this.household = household;
	}
	public String getNannyNotes() {
		return nannyNotes;
	}
	public void setNannyNotes(String nannyNotes) {
		this.nannyNotes = nannyNotes;
	}
	public String getParentNotes() {
		return parentNotes;
	}
	public void setParentNotes(String parentNotes) {
		this.parentNotes = parentNotes;
	}
	public int getId() {
		return id;
	}
	@Override
	public String toString() {
		return "Shift [id=" + id + ", userId=" + user + ", householdId=" + household + ", nannyNotes=" + nannyNotes
				+ ", parentNotes=" + parentNotes + "]";
	}
	
	
}
