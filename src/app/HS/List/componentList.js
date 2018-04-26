import React from 'react';
import MobileTearSheet from './MTS';
import {List, ListItem} from 'material-ui/List';
import ActionGrade from 'material-ui/svg-icons/action/grade';
import ContentInbox from 'material-ui/svg-icons/content/inbox';
import FontIcon from 'material-ui/FontIcon';
import {Card, CardActions, CardHeader, CardText} from 'material-ui/Card';
import Avatar from 'material-ui/Avatar';


import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn,
} from 'material-ui/Table';

import {
  green500,
} from 'material-ui/styles/colors';

const styles = {
    container: {
        overflowY:'hidden',
    },
};

export default class ListExampleNested extends React.Component {
    
  state = {
    open: false,
  };

  render() {
    return (
        
    <Card>
        <CardHeader
          title="Subject 1"
          subtitle=""
              avatar={<Avatar
                      icon={ <i className="fa fa-check noincident" aria-hidden="true"></i>}
                      color={'white'}
                      backgroundColor={green500}
                      size={48}
                      />}
                      subtitle="Last Updated :2 min ago"
        />
      <CardText>
    
      <div>
        <MobileTearSheet >
          <List >
            <ListItem
              primaryText="Component 1"
              leftIcon={<i className="fa fa-check noincident" aria-hidden="true"></i>}
              initiallyOpen={false}
              primaryTogglesNestedList={true}
              nestedItems={[
                  <Table>
                        
                            <TableHeader displaySelectAll={false} adjustForCheckbox={false}>
                              <TableRow>
                                <TableHeaderColumn>CIA 1</TableHeaderColumn>
                                <TableHeaderColumn>CIA 2</TableHeaderColumn>
                                <TableHeaderColumn>CIA 3</TableHeaderColumn>
                                <TableHeaderColumn>SEM</TableHeaderColumn>
                              </TableRow>
                            </TableHeader>
                            <TableBody displayRowCheckbox={false} showRowHover={true}>
                              <TableRow>
                                <TableRowColumn style={{color:'#008000'}}>Active</TableRowColumn>
                                <TableRowColumn>not updated</TableRowColumn>
                                <TableRowColumn>not updated</TableRowColumn>
                                <TableRowColumn>not updated</TableRowColumn>
                              </TableRow>
                              <TableRow>
                                <TableRowColumn style={{color:'#FFC200'}}>DONE</TableRowColumn>
                                <TableRowColumn>Active</TableRowColumn>
                                <TableRowColumn>not updated</TableRowColumn>
                                <TableRowColumn>not updated</TableRowColumn>
                              </TableRow>
                              <TableRow>
                                <TableRowColumn style={{color:'#008000'}}>DONE</TableRowColumn>
                                <TableRowColumn>DONE</TableRowColumn>
                                <TableRowColumn>Active</TableRowColumn>
                                <TableRowColumn>not updated</TableRowColumn>
                              </TableRow>
                              <TableRow>
                                <TableRowColumn style={{color:'#008000'}}>DONE</TableRowColumn>
                                <TableRowColumn>DONE</TableRowColumn>
                                <TableRowColumn>DONE</TableRowColumn>
                                <TableRowColumn>Active</TableRowColumn>
                              </TableRow>
                            </TableBody>
                          </Table>
                  ]}
            />
        <ListItem
              primaryText="Component 2"
              leftIcon={<i className="fa fa-check noincident" aria-hidden="true"></i>}
              initiallyOpen={false}
              primaryTogglesNestedList={true}
              nestedItems={[
                  <Table>
                            <TableHeader displaySelectAll={false} adjustForCheckbox={false}>
                              <TableRow>
                                <TableHeaderColumn>CIA 1</TableHeaderColumn>
                                <TableHeaderColumn>CIA 2</TableHeaderColumn>
                                <TableHeaderColumn>CIA 3</TableHeaderColumn>
                                <TableHeaderColumn>SEM</TableHeaderColumn>
                              </TableRow>
                            </TableHeader>
                            <TableBody displayRowCheckbox={false} showRowHover={true}>
                              <TableRow>
                                <TableRowColumn style={{color:'#008000'}}>Active</TableRowColumn>
                                <TableRowColumn>not updated</TableRowColumn>
                                <TableRowColumn>not updated</TableRowColumn>
                                <TableRowColumn>not updated</TableRowColumn>
                              </TableRow>
                              <TableRow>
                                <TableRowColumn style={{color:'#FFC200'}}>DONE</TableRowColumn>
                                <TableRowColumn>Active</TableRowColumn>
                                <TableRowColumn>not updated</TableRowColumn>
                                <TableRowColumn>not updated</TableRowColumn>
                              </TableRow>
                              <TableRow>
                                <TableRowColumn style={{color:'#008000'}}>DONE</TableRowColumn>
                                <TableRowColumn>DONE</TableRowColumn>
                                <TableRowColumn>Active</TableRowColumn>
                                <TableRowColumn>not updated</TableRowColumn>
                              </TableRow>
                              <TableRow>
                                <TableRowColumn style={{color:'#008000'}}>DONE</TableRowColumn>
                                <TableRowColumn>DONE</TableRowColumn>
                                <TableRowColumn>DONE</TableRowColumn>
                                <TableRowColumn>Active</TableRowColumn>
                              </TableRow>
                            </TableBody>


                          </Table>
                  ]}
            />
             <ListItem
              primaryText="Component 3"
              leftIcon={<i className="fa fa-check noincident" aria-hidden="true"></i>}
              initiallyOpen={false} 
              primaryTogglesNestedList={true}
              nestedItems={[
                  <Table>
                        
                            <TableHeader displaySelectAll={false} adjustForCheckbox={false}>
                              <TableRow>
                                <TableHeaderColumn>CIA 1</TableHeaderColumn>
                                <TableHeaderColumn>CIA 2</TableHeaderColumn>
                                <TableHeaderColumn>CIA 3</TableHeaderColumn>
                                <TableHeaderColumn>SEM</TableHeaderColumn>
                              </TableRow>
                            </TableHeader>
                            <TableBody displayRowCheckbox={false} showRowHover={true}>
                              <TableRow>
                                <TableRowColumn style={{color:'#008000'}}>Active</TableRowColumn>
                                <TableRowColumn>not updated</TableRowColumn>
                                <TableRowColumn>not updated</TableRowColumn>
                                <TableRowColumn>not updated</TableRowColumn>
                              </TableRow>
                              <TableRow>
                                <TableRowColumn style={{color:'#FFC200'}}>DONE</TableRowColumn>
                                <TableRowColumn>Active</TableRowColumn>
                                <TableRowColumn>not updated</TableRowColumn>
                                <TableRowColumn>not updated</TableRowColumn>
                              </TableRow>
                              <TableRow>
                                <TableRowColumn style={{color:'#008000'}}>DONE</TableRowColumn>
                                <TableRowColumn>DONE</TableRowColumn>
                                <TableRowColumn>Active</TableRowColumn>
                                <TableRowColumn>not updated</TableRowColumn>
                              </TableRow>
                              <TableRow>
                                <TableRowColumn style={{color:'#008000'}}>DONE</TableRowColumn>
                                <TableRowColumn>DONE</TableRowColumn>
                                <TableRowColumn>DONE</TableRowColumn>
                                <TableRowColumn>Active</TableRowColumn>
                              </TableRow>
                            </TableBody>
                          </Table>
                  ]}
            />
            <ListItem
              primaryText="Component 4"
              leftIcon={<i className="fa fa-exclamation-triangle" aria-hidden="true" style={{color:'#FFC200'}} ></i>}
              initiallyOpen={false} 
              primaryTogglesNestedList={true}
              nestedItems={[
                  <Table>
                        
                            <TableHeader displaySelectAll={false} adjustForCheckbox={false}>
                              <TableRow>
                                <TableHeaderColumn>CIA 1</TableHeaderColumn>
                                <TableHeaderColumn>CIA2</TableHeaderColumn>
                                <TableHeaderColumn>CIA3</TableHeaderColumn>
                                <TableHeaderColumn>SEM</TableHeaderColumn>
                              </TableRow>
                            </TableHeader>
                            <TableBody displayRowCheckbox={false}>                     
                            </TableBody>
                          </Table>
                  ]}
            />
          </List>
        </MobileTearSheet>
      </div>
           </CardText>
  </Card>
    );
  }
}