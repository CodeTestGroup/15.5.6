<?php
include '../configs/dbconfig.php'; // Adjust the path to include dbconfig.php

// Get submitted answer
$question_ids = $_POST['question_id'];
$answer_ids = $_POST['answer_id'];

// Loop through submitted answers and update clicks
foreach ($question_ids as $question_id) {
    $answer_id = $answer_ids[$question_id];
    $query = "UPDATE answers SET clicks = clicks + 1 WHERE question_id = $question_id AND answer_id = $answer_id";
    $conn->query($query);
}

// Redirect back to index.php
header("Location: index.php");
exit();
?>
