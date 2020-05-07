import renderer from 'react-test-renderer';

describe('<CarReportingWizard /> container', () => {

  beforeAll(() => {
    jest.mock('../../hooks/useGlobal')
  })

  it('Should pass', () => {
    expect(true).toEqual(true);
  })
})