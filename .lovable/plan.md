
## Redirect /reformer to Homepage

### What needs to change

In `src/App.tsx`, the `/reformer` route currently renders the `<Reformer />` page. We'll replace it with a `<Navigate>` redirect component from React Router so anyone visiting `/reformer` is instantly sent to `/`.

### Technical change

**File: `src/App.tsx`**

Replace:
```tsx
<Route path="/reformer" element={<Reformer />} />
```

With:
```tsx
<Route path="/reformer" element={<Navigate to="/" replace />} />
```

- `replace` ensures the browser history is replaced (not pushed), so the back button won't loop back to `/reformer`
- The `Reformer` import and `Reformer.tsx` page file can remain — no deletions needed

That's the only change required.
