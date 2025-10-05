describe('API Testing', () => {
  it('List User', () => {
    cy.request('GET', 'https://reqres.in/api/users?page=2')
      .then((response) => {
        expect(response.status).to.eq(200)
        expect(response.body).to.have.property('data')
        expect(response.body.data).to.be.an('array')
      })
  })
  it('Single User', () => {
    cy.request('GET', 'https://reqres.in/api/users/2')
      .then((response) => {
        expect(response.status).to.eq(200)
        expect(response.body).to.have.property('data')
      })
  })
  it('Single User Not Found', () => {
    cy.request({
       method: 'GET',
       url: 'https://reqres.in/api/users/23',
       headers: {
         'x-api-key': 'reqres-free-v1'
    },
      failOnStatusCode: false
    })
    .then((response) => {
    expect(response.status).to.eq(404)
   })
})
  it('List resource', () => {
    cy.request('GET', 'https://reqres.in/api/unknown')
      .then((response) => {
        expect(response.status).to.eq(200)
        expect(response.body).to.have.property('data')
        expect(response.body.data).to.be.an('array')
      })
  })
  it('POST - Create User', () => {
    cy.request({
      method: 'POST',
      url: 'https://reqres.in/api/users',
      body: {
        name: "morpheus",
        job: "leader"
      },
      headers: {
        'x-api-key': 'reqres-free-v1'
      }    
    })
    .then((response) => {
      expect(response.status).to.eq(201)
      expect(response.body).to.have.property('name','morpheus')
      expect(response.body).to.have.property('job','leader')
      expect(response.body).to.have.property('id')
      expect(response.body).to.have.property('createdAt')
    })
  })
  it('Update', () => {
    cy.request({
      method: 'PATCH',
      url: 'https://reqres.in/api/users/2',
      body: {
        name: "morpheus",
        job: "zion resident"
      },
      headers: {
        'x-api-key': 'reqres-free-v1'
      }    
    })
    .then((response) => {
      expect(response.status).to.eq(200)
      expect(response.body).to.have.property('name','morpheus')
      expect(response.body).to.have.property('job','zion resident')
      expect(response.body).to.have.property('updatedAt')
    })
  })
  it('Update', () => {
    cy.request({
      method: 'PUT',
      url: 'https://reqres.in/api/users/2',
      body: {
        name: "morpheus",
        job: "zion resident"
      },
      headers: {
        'x-api-key': 'reqres-free-v1'
      }    
    })
    .then((response) => {
      expect(response.status).to.eq(200)
      expect(response.body).to.have.property('name','morpheus')
      expect(response.body).to.have.property('job','zion resident')
      expect(response.body).to.have.property('updatedAt')
    })
  })
  it('DELETE', () => {
    cy.request({
       method: 'DELETE',
       url: 'https://reqres.in/api/users/2',
       headers: {
         'x-api-key': 'reqres-free-v1'
    },
      failOnStatusCode: false
    })
    .then((response) => {
    expect(response.status).to.eq(204)
   })
})
it('REGISTER SUCCESSFUL', () => {
    cy.request({
      method: 'POST',
      url: 'https://reqres.in/api/register',
      body: {
        "email": "eve.holt@reqres.in",
        "password": "pistol"
      },
      headers: {
        'x-api-key': 'reqres-free-v1'
      }    
    })
    .then((response) => {
      expect(response.status).to.eq(200)
      
      expect(response.body).to.have.property('id',)
      expect(response.body).to.have.property('token')
    })
  })
  it('DELAY RESPONE', () => {
    cy.request({
    method: 'GET',
    url: 'https://reqres.in/api/users?delay=3',
    headers: {
      'x-api-key': 'reqres-free-v1'
    },
  })
      .then((response) => {
        expect(response.status).to.eq(200)
        expect(response.body).to.have.property('data')
        expect(response.body.data).to.be.an('array')
      })
  })  
})
