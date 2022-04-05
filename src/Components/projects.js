
export default function ProjComp({ projects }) {
    return (
        <div>
            {projects.map((proj, idx) => {
                return (
                    <div className="proj-list" key={idx}>
                        <h3>{proj.name}</h3>
                        <h5><strong>Front End:</strong> {proj.f_end}</h5>
                        <h5><strong>Back End:</strong> {proj.b_end}</h5>
                        <h5><strong>Website:</strong>&nbsp;
                            <a className="contactIcons" href={proj.link} target="_blank" rel="noopener noreferrer">
                                {proj.link}
                            </a>
                        </h5>
                        <p>{proj.desc}</p>
                        {(proj.name === 'Hermosa') ?
                            <div className="hermosa-div">
                                <div className="hermosa-1 col-12 col-md-6">
                                    <h5 className="hermosa-acct">&#8212;Regular Account&#8212;</h5>
                                    <ul className="functionList">
                                        <li>Register</li>
                                        <li>Login</li>
                                        <li>View and Update Profile Information</li>
                                        <li>Change Password</li>
                                        <li>Search for products (returns active products only)</li>
                                        <li>View all active products</li>
                                        <li>View details of an active product</li>
                                        <li>Add the product to Cart</li>
                                        <li>View Cart content</li>
                                        <li>Modify Quantity</li>
                                        <li>Remove item from the Cart</li>
                                        <li>Checkout Cart</li>
                                        <li>View Order History and status of delivery</li>
                                    </ul>
                                </div>
                                <div className="hermosa-2 col-12 col-md-6">
                                    <h5 className="hermosa-acct">&#8212;Admin Account&#8212;</h5>
                                    <ul className="functionList">
                                        <li>Register</li>
                                        <li>Login</li>
                                        <li>View and Update Profile Information</li>
                                        <li>Change Password</li>
                                        <li>Search for a product (returns all products)</li>
                                        <li>Add new product</li>
                                        <li>View all products</li>
                                        <li>Activate and Inactivate product</li>
                                        <li>View and Update product information</li>
                                        <li>
                                            View all orders (can be filtered: All, Processed and Pending)
                                        </li>
                                        <li>Process a product</li>
                                    </ul>
                                </div>
                            </div>
                            :
                            null
                        }
                    </div>
                )
            })}
        </div>
    )
}