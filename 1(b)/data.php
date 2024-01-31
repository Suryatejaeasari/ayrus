<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Employee Details</title>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" integrity="sha384-T3c6CoIi6uLrA9TneNEoa7RxnatzjcDSCmG1MXxSR1GAsXEV/Dwwykc2MPK8M2HN" crossorigin="anonymous">
    <style>
        body {
            padding: 50px;
        }
        .container {
            max-width: 800px;
            margin: 0 auto;
            padding: 20px;
            box-shadow: rgba(100,100,111,0.2) 0px 7px 29px 0px;
        }
        .table-container {
            margin-top: 30px;
        }
    </style>
</head>
<body>
    <div class="container">
        <h2 class="text-center mb-4">Employee Details</h2>
        <?php
        require_once "database.php";

        if(isset($_POST["getdetails"])) {
            $sql = "SELECT * FROM employee";
            $result = mysqli_query($con, $sql);

            if(mysqli_num_rows($result) > 0) {
                echo '<div class="table-container">';
                echo '<table class="table table-striped">';
                echo '<thead><tr><th>Name</th><th>Phone</th><th>Department</th></tr></thead>';
                echo '<tbody>';
                while($row = mysqli_fetch_assoc($result)) {
                    echo '<tr>';
                    echo '<td>'.$row['name'].'</td>';
                    echo '<td>'.$row['phone'].'</td>';
                    echo '<td>'.$row['department'].'</td>';
                    echo '</tr>';
                }
                echo '</tbody>';
                echo '</table>';
                echo '</div>';
            } else {
                echo '<div class="alert alert-warning" role="alert">No records found!</div>';
            }
        }
        ?>
        <form action="data.php" method="POST">
            <button class="btn btn-primary" type="submit" name="getdetails">Get Details</button>
        </form>
    </div>
</body>
</html>
