function Home() {
    return (
        <div className="container mt-4">
        <h1 className="text-center mb-3">Welcome to the Student Dashboard</h1>
        <div className="row">
          <div className="col-md-4">
            <div className="card p-3">
              <h5 className="card-title">Upcoming Assignments</h5>
              <p className="card-text">View tasks due soon.</p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card p-3">
              <h5 className="card-title">Recent Grades</h5>
              <p className="card-text">Check your latest scores.</p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card p-3">
              <h5 className="card-title">Weekly Schedule</h5>
              <p className="card-text">Plan your week.</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
  export default Home;