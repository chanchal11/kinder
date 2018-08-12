import React from 'react';
const ProfileView  = (props) => {
    return (
        <div class="main col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xs-offset-0 col-sm-offset-0 col-md-offset-3 col-lg-offset-3 toppad" >


            <div class="panel panel-info">
              <div class="panel-heading">
                <h3 class="panel-title"> {props.data.name} </h3>
              </div>
              <div class="panel-body">
                <div class="row">
                  <div class="col-md-3 col-lg-3 " align="center"> <img alt="User Pic" src={props.data.thumbnail} class="img-circle img-responsive"/> </div>

                  
                  <div class=" col-md-9 col-lg-9 ">
                    <table class="table table-user-information">
                      <tbody>
                        <tr>
                        <td>First name</td>
                        <td>{props.data.firstName}</td>
                      </tr>
                      <tr>
                      <td>Last name</td>
                      <td>{props.data.lastName}</td>
                    </tr>
                        <tr>
                          <td>Head line</td>
                          <td>{props.data.headline}</td>
                        </tr>
                        <tr>
                          <td>Location</td>
                          <td>{props.data.location}</td>
                        </tr>
                        <tr>
                          <td>Total Connections</td>
                          <td>{props.data.numConns}</td>
                        </tr>


                      </tbody>
                    </table>

                  </div>
                </div>
              </div>
                   <div class="panel-footer">
                          <a href={props.publicProfileUrl} class="btn btn-primary">View Profile</a>
                          <span class="pull-right">
                              <a href="https://linkedin.com/in/chanchal-kumar-119b02118/" data-original-title="About dev" data-toggle="tooltip" type="button" class="btn btn-sm btn-danger"><i class="glyphicon glyphicon-copyright-mark"></i> About Developer </a>
                              <a href="mailto:rrabshrivastava@gmail.com?subject=Selected for our internship program" data-original-title="Broadcast Message" data-toggle="tooltip" type="button" class="btn btn-sm btn-primary"><i class="glyphicon glyphicon-envelope"></i></a>
                          </span>
                      </div>

                </div>
            </div>
        
    )
}

export default ProfileView;