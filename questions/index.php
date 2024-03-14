<?php
error_reporting(E_ALL);
ini_set('display_errors', 1);

include '../configs/dbconfig.php';

// Query to fetch questions and answers
$query = "SELECT q.question_id, q.question_text, a.answer_id, a.answer_text
          FROM questions q
          INNER JOIN answers a ON q.question_id = a.question_id";
$result = $conn->query($query);

// Check for errors in query execution
if (!$result) {
    die("Error: " . $conn->error);
}

// Display questions and answers
if ($result->num_rows > 0) {
    echo "<form action='submit.php' method='post'>";
    while ($row = $result->fetch_assoc()) {
        echo "<p>{$row['question_text']}</p>";
        echo "<input type='hidden' name='question_id[]' value='{$row['question_id']}'>";
        echo "<input type='radio' name='answer_id[{$row['question_id']}]' value='{$row['answer_id']}'>{$row['answer_text']}<br>";
    }
    echo "<input type='submit' value='Submit'>";
    echo "</form>";
} else {
    echo "No questions found";
}
?>
