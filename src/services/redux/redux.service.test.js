import { PendingRequests, createSliceAdapter } from './redux.service';

describe('Redux service', () => {
  it('PendingRequest class works correctly', () => {
    const pendingRequests = new PendingRequests();
    expect(pendingRequests.arePendingRequests()).toBeFalsy();
    expect(pendingRequests.add(1)).toBeTruthy();
    expect(pendingRequests.add(2)).toBeTruthy();
    expect(pendingRequests.remove()).toBeFalsy();
    expect(pendingRequests.remove()).toBeFalsy();
    expect(pendingRequests.arePendingRequests()).toBeFalsy();
  });

  it('CreateSliceAdapter works correctly', () => {
    const action = {
      pending: 'pending',
      fulfilled: 'fulfilled',
      rejected: 'rejected'
    };
    expect(createSliceAdapter('test', { fetch: { ...action } })).toBeTruthy();
  });
});
