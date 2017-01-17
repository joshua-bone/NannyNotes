package random;

import java.io.BufferedReader;
import java.io.FileReader;
import java.util.ArrayList;
import java.util.Collection;
import java.util.Date;
import java.util.List;
import java.util.Random;

import data.EventDAO;
import data.HouseholdDAO;
import entities.Event;
import entities.Household;

public class RDG {
	static List<String> adjectives = new ArrayList<>();
	static List<String> nouns = new ArrayList<>();
	static List<String> verbs = new ArrayList<>();
	static List<String> adverbs = new ArrayList<>();
	static boolean singular = true;

	static Random random = new Random();

	// public static String generateAnswer(String questionString){
	// StringBuilder answer = new StringBuilder();
	// if (questionString.startsWith("How")){
	// answer.append(singular ? "It " : "They ");
	// answer.append(verbs.get((int)(Math.random() * verbs.size())) + (singular
	// ? "s " : " "));
	// answer.append(adverbs.get((int)(Math.random() * adverbs.size())));
	// } else if (questionString.startsWith("Where")){
	// String[] loc = new String[] {"In", "On", "By", "Beside", "Under", "Over",
	// "Outside"};
	// answer.append(loc[(int)(Math.random()*loc.length)]);
	// String ansNoun = "s";
	// while (ansNoun.endsWith("s")){
	// ansNoun = nouns.get((int)(Math.random() * nouns.size()));
	// }
	// String ansAdj = adjectives.get((int)(Math.random() * adjectives.size()));
	// String vowels = "aeiou";
	// answer.append(vowels.contains("" + ansAdj.charAt(0)) ? " an " : " a ");
	// answer.append(ansAdj + " ");
	// answer.append(ansNoun);
	// } else if (questionString.startsWith("Why")){
	// answer.append("Because ");
	// String ansNoun = "a";
	// while (!ansNoun.endsWith("s")){
	// ansNoun = nouns.get((int)(Math.random() * nouns.size()));
	// }
	// answer.append(ansNoun + " ");
	// answer.append(verbs.get((int)(Math.random() * verbs.size())));
	// } else if (questionString.startsWith("What")){
	// String ansNoun = nouns.get((int)(Math.random() * nouns.size()));
	// String ansAdj = adjectives.get((int)(Math.random() * adjectives.size()));
	// if (!ansNoun.endsWith("s")){
	// String vowels = "aeiou";
	// answer.append(vowels.contains("" + ansAdj.charAt(0)) ? "An " : "A ");
	// } else {
	// ansAdj = ansAdj.substring(0, 1).toUpperCase() + ansAdj.substring(1);
	// }
	// answer.append(ansAdj + " ");
	// answer.append(ansNoun);
	// }
	// return answer.toString();
	// }
	//
	// public static String generateSingleQuestion(){
	// StringBuilder question = new StringBuilder();
	// String noun = nouns.get((int)(Math.random()*nouns.size()));
	// String verb = verbs.get((int)(Math.random()*verbs.size()));
	// String adj = adjectives.get((int)(Math.random()*adjectives.size()));
	// String[] w = new String[] {"How", "Where", "Why", "What"};
	// question.append(w[(int)(Math.random() * w.length)] + " ");
	// question.append(noun.endsWith("s") ? "do " : "does a ");
	// question.append(adj + " " + noun + " " + verb + "?");
	// singular = !noun.endsWith("s");
	// return question.toString();
	// }
	//
	// public static void generateQuestions(QuizDAO quizDAO){
	// EntityManagerFactory emf =
	// Persistence.createEntityManagerFactory("RestQuizJPA");;
	// EntityManager em = emf.createEntityManager();
	//
	// try (BufferedReader fIn = new BufferedReader(new
	// FileReader("/Users/joshuabone/SD/Java/workspace/RandomDataGenerator/adjectives.txt"));
	// BufferedReader lIn = new BufferedReader(new
	// FileReader("/Users/joshuabone/SD/Java/workspace/RandomDataGenerator/nouns.txt"));
	// BufferedReader vIn = new BufferedReader(new
	// FileReader("/Users/joshuabone/SD/Java/workspace/RandomDataGenerator/verbs.txt"));
	// BufferedReader aIn = new BufferedReader(new
	// FileReader("/Users/joshuabone/SD/Java/workspace/RandomDataGenerator/adverbs.txt"))){
	// String line;
	// while ((line = fIn.readLine()) != null){
	// adjectives.add(line);
	// }
	// while ((line = lIn.readLine()) != null){
	// nouns.add(line);
	// }
	// while ((line = vIn.readLine()) != null){
	// verbs.add(line);
	// }
	// while ((line = aIn.readLine()) != null){
	// adverbs.add(line);
	// }
	// } catch (Exception e){
	// e.printStackTrace();
	// }
	//
	// for (int quizId = 1; quizId <= quizDAO.index().size(); quizId++){
	// for (int i = 0; i < 5; i++){
	// Question q = new Question();
	// q.setAnswers(new HashSet<Answer>());
	// q.setQuestionText(generateSingleQuestion());
	// int answerNum = (int) (4 * Math.random());
	// for (int j = 0; j < 4; j++){
	// Answer a = new Answer();
	// a.setQuestion(q);
	// a.setAnswerText(generateAnswer(q.getQuestionText()));
	// a.setCorrect(j == answerNum);
	// q.getAnswers().add(a);
	// }
	// quizDAO.createQuestion(quizId, q);
	// }
	// }
	//
	// em.close();
	// emf.close();
	// }
	//
	// public static void generateScores(QuizDAO quizDAO, UserDAO userDAO) {
	// EntityManagerFactory emf =
	// Persistence.createEntityManagerFactory("RestQuizJPA");;
	// EntityManager em = emf.createEntityManager();
	//
	// List<User> users = userDAO.index();
	// List<Quiz> quizzes = quizDAO.index();
	//
	// for (int userId = 0; userId < users.size(); userId++){
	// for (int i = 0; i < 5; i++){
	// int quizId = 1 + (int) ((Math.random() * quizzes.size()));
	// Score score = new Score();
	// score.setQuiz(em.find(Quiz.class, quizId));
	// score.setUser(em.find(User.class, userId+1));
	// score.setValue(Math.random() * 100);
	// em.getTransaction().begin();
	// em.persist(score);
	// em.flush();
	// em.getTransaction().commit();
	// }
	// }
	//
	// em.close();
	// emf.close();
	// }
	//
	// public static void generateQuizzes(QuizDAO quizDAO) {
	// List<String> adjectives = new ArrayList<>();
	// List<String> nouns = new ArrayList<>();
	// try (BufferedReader fIn = new BufferedReader(new
	// FileReader("/Users/joshuabone/SD/Java/workspace/RandomDataGenerator/adjectives.txt"));
	// BufferedReader lIn = new BufferedReader(new
	// FileReader("/Users/joshuabone/SD/Java/workspace/RandomDataGenerator/nouns.txt"))){
	// String line;
	// while ((line = fIn.readLine()) != null){
	// adjectives.add(line);
	// }
	// while ((line = lIn.readLine()) != null){
	// nouns.add(line);
	// }
	// } catch (Exception e){
	// e.printStackTrace();
	// }
	//
	// EntityManagerFactory emf =
	// Persistence.createEntityManagerFactory("RestQuizJPA");;
	// EntityManager em = emf.createEntityManager();
	//
	// for (int i = 0; i < 5000; i++){
	// Quiz q = new Quiz();
	// String adj = adjectives.get((int) (Math.random() * adjectives.size()));
	// String noun = nouns.get((int) (Math.random() * nouns.size()));
	// String quizname = "The " + adj.toLowerCase() + " " + noun.toLowerCase() +
	// " quiz";
	// q.setName(quizname);
	// quizDAO.create(q);
	// }
	//
	// em.close();
	// emf.close();
	// }

	// public static void generateUsers(UserDAO userDAO) {
	// List<String> firstNames = new ArrayList<>();
	// List<String> lastNames = new ArrayList<>();
	// try (BufferedReader fIn = new BufferedReader(new
	// FileReader("/Users/joshuabone/SD/Java/workspace/RandomDataGenerator/firstnames.txt"));
	// BufferedReader lIn = new BufferedReader(new
	// FileReader("/Users/joshuabone/SD/Java/workspace/RandomDataGenerator/lastnames.txt"))){
	// String line;
	// while ((line = fIn.readLine()) != null){
	// firstNames.add(line);
	// }
	// while ((line = lIn.readLine()) != null){
	// lastNames.add(line);
	// }
	// } catch (Exception e){
	// e.printStackTrace();
	// }
	//
	// EntityManagerFactory emf =
	// Persistence.createEntityManagerFactory("nannynotesdb");;
	// EntityManager em = emf.createEntityManager();
	//
	// for (int i = 0; i < 1000; i++){
	// User u = new User();
	// String fn = firstNames.get((int) (Math.random() * firstNames.size()));
	// String ln = lastNames.get((int) (Math.random() * lastNames.size()));
	// String username = fn.toLowerCase() + "_" + ln.toLowerCase();
	// u.setUsername(username);
	// u.setName(fn.substring(0, 1) + fn.substring(1).toLowerCase());
	// u.setRole(i < 500 ? Role.PARENT : Role.NANNY);
	// u.setPassword(userDAO.getPasswordEncoder().encode(username));
	// userDAO.create(u);
	// }
	//
	// em.close();
	// emf.close();
	// }

	// public static void generateHouseholds(HouseholdDAO householdDAO, UserDAO
	// userDAO, ChildDAO childDAO) {
	//
	// EntityManagerFactory emf =
	// Persistence.createEntityManagerFactory("nannynotesdb");
	// ;
	// EntityManager em = emf.createEntityManager();
	//
	// List<String> firstNames = new ArrayList<>();
	// // List<String> lastNames = new ArrayList<>();
	// try (BufferedReader fIn = new BufferedReader(
	// new
	// FileReader("/Users/joshuabone/SD/Java/workspace/RandomDataGenerator/firstnames.txt")))
	// {
	// String line;
	// while ((line = fIn.readLine()) != null) {
	// firstNames.add(line);
	// }
	// } catch (Exception e) {
	// e.printStackTrace();
	// }
	//
	// try (BufferedReader fIn = new BufferedReader(
	// new
	// FileReader("/Users/joshuabone/SD/Java/workspace/RandomDataGenerator/adjectives.txt"));
	// BufferedReader lIn = new BufferedReader(
	// new
	// FileReader("/Users/joshuabone/SD/Java/workspace/RandomDataGenerator/nouns.txt"));
	// BufferedReader vIn = new BufferedReader(
	// new
	// FileReader("/Users/joshuabone/SD/Java/workspace/RandomDataGenerator/verbs.txt"));
	// BufferedReader aIn = new BufferedReader(
	// new
	// FileReader("/Users/joshuabone/SD/Java/workspace/RandomDataGenerator/adverbs.txt")))
	// {
	// String line;
	// while ((line = fIn.readLine()) != null) {
	// adjectives.add(line);
	// }
	// while ((line = lIn.readLine()) != null) {
	// nouns.add(line);
	// }
	// while ((line = vIn.readLine()) != null) {
	// verbs.add(line);
	// }
	// while ((line = aIn.readLine()) != null) {
	// adverbs.add(line);
	// }
	// } catch (Exception e) {
	// e.printStackTrace();
	// }
	//
	// for (int i = 1; i <= 500; i++) {
	// User u = userDAO.show(i);
	// String lastname = u.getUsername().split("_")[1];
	// lastname = lastname.substring(0, 1).toUpperCase() +
	// lastname.substring(1);
	// Household h = new Household();
	// h.setName("The " + lastname + " family");
	// h.addUser(u);
	// User n = userDAO.show(i + 500);
	// h.addUser(n);
	//
	//
	// ArrayList<String> cNames = new ArrayList<>();
	// ArrayList<Child> children = new ArrayList<>();
	// int nChildren = 1 + random.nextInt(4);
	//
	// for (int j = 0; j < nChildren; j++) {
	// Child c = new Child();
	// c.setAge(random.nextInt(18));
	// String name = firstNames.get(random.nextInt(firstNames.size()));
	// name = name.substring(0, 1) + name.substring(1).toLowerCase();
	// c.setName(name);
	// c.setNannyNotes(nannyNote(c.getName()));
	// c.setParentNotes(parentNote(c.getName()));
	// cNames.add(c.getName());
	// c.setHousehold(h);
	// children.add(c);
	//
	// }
	// h.setNannyNotes(householdNannyNote(cNames));
	// h.setParentNotes(householdParentNote(cNames));
	// householdDAO.create(h);
	//
	// for (Child c : children){
	// childDAO.create(c);
	// }
	//
	// u.setHouseholds(new HashSet<>());
	// n.setHouseholds(new HashSet<>());
	// u.addHousehold(h);
	// n.addHousehold(h);
	// userDAO.update(u.getId(), u);
	// userDAO.update(n.getId(), n);
	// }
	//
	// em.close();
	// emf.close();
	// }
	//
	// public static String householdNannyNote(ArrayList<String> names){
	// String v = rVerb();
	// if (v.endsWith("e")) v = v.substring(0, v.length() - 1);
	// return "I've been having trouble with " +
	// names.get(random.nextInt(names.size())) + " " + v + "ing with the " +
	// rAdj() + " " + rNoun(true) + " lately.";
	// }
	//
	// public static String householdParentNote(ArrayList<String> names){
	// return "Please remember that " + names.get(random.nextInt(names.size()))
	// + " has " + rNoun(false) + " practice this week.";
	// }
	//
	// public static String nannyNote(String name){
	// return name + " tends to " + rVerb() + " " + rAdv() + " but has been " +
	// rAdjWithPrep() + " " + rNoun(false) + " the last couple days.";
	// }
	//
	// public static String parentNote(String name){
	// return "Please make sure " + name + " does not " + rVerb() + " with the "
	// + rAdj() + " " + rNoun() + ".";
	// }

	public static void generateEvents(HouseholdDAO householdDAO, EventDAO eventDAO) {
		try (BufferedReader fIn = new BufferedReader(
				new FileReader("/Users/joshuabone/SD/Java/workspace/RandomDataGenerator/adjectives.txt"));
				BufferedReader lIn = new BufferedReader(
						new FileReader("/Users/joshuabone/SD/Java/workspace/RandomDataGenerator/nouns.txt"));
				BufferedReader vIn = new BufferedReader(
						new FileReader("/Users/joshuabone/SD/Java/workspace/RandomDataGenerator/verbs.txt"));
				BufferedReader aIn = new BufferedReader(
						new FileReader("/Users/joshuabone/SD/Java/workspace/RandomDataGenerator/adverbs.txt"))) {
			String line;
			while ((line = fIn.readLine()) != null) {
				adjectives.add(line);
			}
			while ((line = lIn.readLine()) != null) {
				nouns.add(line);
			}
			while ((line = vIn.readLine()) != null) {
				verbs.add(line);
			}
			while ((line = aIn.readLine()) != null) {
				adverbs.add(line);
			}
		} catch (Exception e) {
			e.printStackTrace();
		}
		
		Collection<Household> households = householdDAO.index();
		Date d = new Date();
		for (Household h : households){
			int nEvents = 5 + random.nextInt(3);
			for (int i = 0; i < nEvents; i++){
				Event newEvent = new Event();
				newEvent.setHousehold(h);
				newEvent.setStartsAt(new Date(d.getYear(), d.getMonth(), d.getDate(), d.getHours() + i, d.getMinutes()));
				newEvent.setEndsAt(new Date(d.getYear(), d.getMonth(), d.getDate(), d.getHours() + i + 1, d.getMinutes()));
				newEvent.setTitle(randomEventTitle());
				eventDAO.create(newEvent);
			}
		}
	}
	
	public static String randomEventTitle(){
		StringBuilder sb = new StringBuilder();
		String v = rVerb();
		sb.append(v.substring(0, 1).toUpperCase() + v.substring(1) + " ");
		String[] prep = new String[] {"in", "on", "with", "by", "under", "over", "through"};
		sb.append(prep[random.nextInt(prep.length)] + " the " + rAdj() + " " + rNoun());
		return sb.toString();
	}

	public static String rAdjWithPrep() {
		String a = adjectives.get(random.nextInt(adjectives.size()));
		if (("aeiou").contains(a.substring(0, 1))) {
			a = "an " + a;
		} else {
			a = "a " + a;
		}
		return a;
	}

	public static String rAdj() {
		return adjectives.get(random.nextInt(adjectives.size()));
	}

	public static String rVerb() {
		return verbs.get(random.nextInt(verbs.size()));
	}

	public static String rAdv() {
		return adverbs.get(random.nextInt(adverbs.size()));
	}

	public static String rNoun(boolean plural) {
		String n;
		do {
			n = nouns.get(random.nextInt(nouns.size()));
			singular = !n.endsWith("s");
		} while (n.endsWith("s") != plural);

		return n;
	}

	public static String rNoun() {
		String n = nouns.get(random.nextInt(nouns.size()));
		singular = !n.endsWith("s");
		return n;
	}
}
