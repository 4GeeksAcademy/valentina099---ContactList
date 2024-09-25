import React, { useContext , useState } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";

const ContactCard = ({ fullName, address, phone, email,id}) => {

    const {actions} = useContext(Context);



    const handleDelete = (id) => {
        actions.deleteContact(id);
    }

    return (

        <div className="container border d-flex gap-3 justify-content-center p-2">

            <div className="col-3">
                <img className="col-5 rounded-circle" 
                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMsAAACUCAMAAAAK/S0jAAAAJ1BMVEX////b29vX19f09PT8/Pzu7u7q6ure3t75+fnn5+fk5OTh4eHx8fFYu6g6AAAE6klEQVR4nO2c25KDIAyGlzMI7/+8C9juWrUkCg10hu9yZ+rySyAHIj8/k8lkMplMJpPJZDKZTCZ4pLRWiKCUdlqpIIS1UvYe1A2kFUEvhvEtzCw6CPtVeqRQzjPGONuT/uKdEt8ix+b5OMjYEufH9h4mjAzOFGX8yXFh7MmRyqOErHg1sBqFm5LN5KjeQ36D9eVFcgY3Q64bd11JVuN6D3yPDLeErIy1CUhdIYUxPZAYsVRJYWwRvSU8CVe3ryMm9BaxoqqVJIbYnV0TKYwNsJ+1kjKAmHZSuotpKaWzmDbL/p+OG0CNsz+n29Ys6v3KHtPJacpab3/G0iWcwcZgMXw2Js4gx8XRXWIzzGLhzGiVakmptqRxJtlhyUiMEi02BTEphQZqGhn6iYEtjLvjqCQiYyP3MgIa07vsF86kOfVeBtq+fvtTcEYNoY5IgF5uyYND0QKndf/Qqy2PBqw9EalYB1Mlpf73DZFAdRLeiYD42tPty4CbNPBIIO9E5zDLgRhqTwX2dDIfI8om5lEPAZ5B5WPKDoLjKsS2+JCCe2oKEOvjpgWaGKLYv5yCceyyLbtboqQMcA7YQwjAyEhcDBDqol1D2UmdBdntsWVDR49B6vI7oThkEkUpF+JCwFYpFowqezn8EMovhWLBQJlhMy0EC8YClaRWWjiBh7FA7oHXAkWon1/8gGWgXSWcm35+8QMB7pV9DHjS57VAbxPvX4B87MIM3wXSgkjEViSw8Ai0AJaBNw2owkZQjYG0oDMPqExGoKUcRSWQD4IeM4IWpJ2D1UICxw/PC0c9B37MAOsF10UFH0APoQWzlYHHBCRaYDtHhFJQUJe19PeVGSBRBlJTMi0I64gspZmB0oaHls/HY0D5BCEGJ4UiTsaYeuJtgQvb4UCQv6BsPbOc/h7d4EBQiIFC9Q380HcA1JFeoCiQXelN4kt4fvIipQ3LlRZmisIlkCTv1TCfPuRRevGYPoUNFPUx7OLf6OHIXpgtJM3xmNaJBpDUk5s3851Dc5T8gRa4I0TN1x/pgdtD1RMHZuo4ivsa0Xll0cjiHpy63zAEvbxt9qPru3xrZF5d3EllOH/WefzzCc53MnPvO0OpTyI8uoaYs5Kjud/0efz6D138bMBxYlyVgdtdwErZQLZvzan/tjC8TA1p++hrNaZF94r9D6KJ+/pe+i3bZE3yTwxxv+W2hNEqon3GE+R9sBsf0yw4f2yPdL7l7x8/jbthnrGmRh0a+tdjYN40cErP7PEJzFrEaGsQMdKjycH25OpS00zWek7S0nNCfItNm2/jrtzru6QcyrRsWHVdP37TLZMmx/t+MB59dSsxmnN6z/LCwhtdjOBYbyl5ZlqIGUFKDmaKJ0cY0pHMAFLSBsArg37h2y27SpThVaW5EH8/xFUEiRDfq7trZzE/5n6QKyISFeOpeg8fQSrGzY36hVgMZ8Ndq5SOMszFIFc6Q9TsfhWRPz/Gj8wmJSTHX3fQqS6ONP71lH+Y7euIVOmGPhOAK/mkjdtwnMThFsoruZ7KmVfvrhiUVqh8DDv0TWpPhPNpIfjlcQ3k48+PCyLzebLxdTVbQmwccr4OMg3a6Xwmrt3y/FsUOZRDgZBxCuL87E7CorQ4WV9gWwdkMqoQp0THudEqJJP7Rh1bZKL3ICaTyWQymUwmk8lkMpl8Jb+G3Cjwk4PPuAAAAABJRU5ErkJggg=="></img>
            </div>
            <div className="col-6 d-flex flex-column justify-content-between text-start" >
                <div >{fullName}</div>
                <div >{address}</div>
                <div >{phone}</div>
                <div >{email}</div>
            </div>
            <div className="col-1">
                
                <i className="fa-solid fa-pencil"></i>
                <Link to={`/edit-contact/` + id}>
                    Edit contact
                </Link>
            </div>
            <div className="col-1">
                <button onClick={()=> {handleDelete(id)}}>
                   X
                </button>
            </div>
        </div>
    )
}

export default ContactCard;