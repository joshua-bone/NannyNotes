package entities;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class Household {
@Id
@GeneratedValue(strategy=GenerationType.IDENTITY)
private int id;
private String name;
    private int parentNotes;
    private int nannyNotes;
    
    public Household(){}
    
public Household(int id, String name, int parentNotes, int nannyNotes) {
this.id = id;
this.name = name;
this.parentNotes = parentNotes;
this.nannyNotes = nannyNotes;
}
public String getName() {
return name;
}
public void setName(String name) {
this.name = name;
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
return "Household [id=" + id + ", name=" + name + ", parentNotes=" + parentNotes + ", nannyNotes=" + nannyNotes
+ "]";
}
}
