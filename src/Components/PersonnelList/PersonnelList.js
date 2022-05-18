import React from "react";
import "./PersonnelList.scss";

const PersonnelList = () => {
	return (
		<>
			<main className="personnel-container">
				<aside>
					<a href="/">
						<i class="fa-solid fa-house-chimney"></i>Beranda
					</a>
					<a href="/">
						<i class="fa-solid fa-users"></i>Personal List
					</a>
					<a href="/">
						<i class="fa-regular fa-calendar-days"></i> Daily Attendance
					</a>
				</aside>
				<div className="personnel-content">
					<div className="personnel-search">
						<div className="personnel-left">
							<h1>Personnel List</h1>
							<p>List All Personnel</p>
						</div>
						<div className="personnel-right">
							<div className="input-container">
								<i class="fas fa-search"></i>
								<input type="text" placeholder="Find Personnels" />
							</div>
							<button>
								Add Personnel <i class="fas fa-plus"></i>
							</button>
						</div>
					</div>
					<div className="personnel-card">
						<div className="card-item">
							<div className="card-id">
								<p>
									Personnel ID: <span>12345</span>
								</p>
								<i class="fas fa-ellipsis-h"></i>
							</div>
							<div className="card-info">
								<div className="card-img">
									<img
										src="https://images.unsplash.com/photo-1652794121449-561adf5b5eb9?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=465"
										alt=""
									/>
								</div>
								<div className="card-detail">
									<p className="text-bold">Name</p>
									<p>First Name Last Name</p>
									<p className="text-bold">Telephone</p>
									<p>Phone Number</p>
									<p className="text-bold">Birthday</p>
									<p>DD-MM</p>
									<p className="text-bold">Email</p>
									<p>Email Address</p>
								</div>
							</div>
						</div>
						<div className="card-item">
							<div className="card-id">
								<p>
									Personnel ID: <span>12345</span>
								</p>
								<i class="fas fa-ellipsis-h"></i>
							</div>
							<div className="card-info">
								<div className="card-img">
									<img
										src="https://images.unsplash.com/photo-1652794121449-561adf5b5eb9?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=465"
										alt=""
									/>
								</div>
								<div className="card-detail">
									<p className="text-bold">Name</p>
									<p>First Name Last Name</p>
									<p className="text-bold">Telephone</p>
									<p>Phone Number</p>
									<p className="text-bold">Birthday</p>
									<p>DD-MM</p>
									<p className="text-bold">Email</p>
									<p>Email Address</p>
								</div>
							</div>
						</div>
						<div className="card-item">
							<div className="card-id">
								<p>
									Personnel ID: <span>12345</span>
								</p>
								<i class="fas fa-ellipsis-h"></i>
							</div>
							<div className="card-info">
								<div className="card-img">
									<img
										src="https://images.unsplash.com/photo-1652794121449-561adf5b5eb9?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=465"
										alt=""
									/>
								</div>
								<div className="card-detail">
									<p className="text-bold">Name</p>
									<p>First Name Last Name</p>
									<p className="text-bold">Telephone</p>
									<p>Phone Number</p>
									<p className="text-bold">Birthday</p>
									<p>DD-MM</p>
									<p className="text-bold">Email</p>
									<p>Email Address</p>
								</div>
							</div>
						</div>
						<div className="card-item">
							<div className="card-id">
								<p>
									Personnel ID: <span>12345</span>
								</p>
								<i class="fas fa-ellipsis-h"></i>
							</div>
							<div className="card-info">
								<div className="card-img">
									<img
										src="https://images.unsplash.com/photo-1652794121449-561adf5b5eb9?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=465"
										alt=""
									/>
								</div>
								<div className="card-detail">
									<p className="text-bold">Name</p>
									<p>First Name Last Name</p>
									<p className="text-bold">Telephone</p>
									<p>Phone Number</p>
									<p className="text-bold">Birthday</p>
									<p>DD-MM</p>
									<p className="text-bold">Email</p>
									<p>Email Address</p>
								</div>
							</div>
						</div>
					</div>
					<div className="personnel-pagination">
						<button>
							<i class="fas fa-angle-left"></i> Previous Page
						</button>
						<button>
							Next Page <i class="fas fa-angle-right"></i>
						</button>
					</div>
				</div>
			</main>
		</>
	);
};

export default PersonnelList;
