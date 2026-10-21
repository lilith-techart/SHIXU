# Recovery status — evidence checked

- Full original RAR CRC: PASS, exit code0. SHA256 matches the P0 baseline.
- Cold Original: 58,579,712,222 bytes; all23,036 archived files checked for existence and size.
- Independent Working: 37,955,939,035 bytes;20,623,773,187 bytes excluded from the working copy only. Original keeps all Autosaves.
- Content, Main.umap, Config, blueprints and External Actors retained. Key SHA256 checks match Original and Working. Full Content redistribution is not provided.
- Matched Unreal Engine5.5.4, CL40574608 installed and verified through actual Build.version, executable and completed Epic manifest.
- Matched UE5.5.4 has opened `/Game/Main.Main` in the Working editor. A read-only probe recorded 7,436 loaded actors and no dirty content/map packages. This verifies editor loading, not full-world or playable-route health.
- The actual first-open MapCheck recorded 504 errors involving world references to spatially loaded actors. These remain unresolved. Asset discovery also flagged 111 incompatible packages; checked headers include unsupported LegacyFileVersion -9; exact originating engine versions remain unknown. Their full runtime impact is unverified. No header rewriting, upgrade, asset deletion or bulk resave was performed.
- Current loaded editor folders use names such as MainCorridor, RitualCorridor and Chasm. Their exact mapping to portfolio region names is still being checked; historical screenshot grouping is not a topology assertion.
- No scene, material, lighting or collision repair in this phase. No playable route, new visual Before/After or GPU benchmark yet.

The size reduction is omission of preserved caches/history, not deletion of project assets. File restoration does not by itself prove runtime recovery.


## OVERNIGHT_004 independent evidence refresh

- Original/Working: six key file hashes each match the earlier frozen baseline. This does not claim a full new hash of every original file.
- 504 complete MapCheck messages independently reconciled; one error template, not proof of 504 damaged meshes. Twenty representative object samples retained privately; exact referring property chains, Data Layers and runtime cells remain unresolved.
- 111 incompatible package headers read again. Assets retained; absence of discovered referencers is not deletion permission.
- 14,289 asset/config/project metadata entries are a subset of the 23,036 archived files; rebuildable caches and saved recovery material explain different inventory scopes.
- Film Grain / Scene Fringe: controlled experiments pending actual view and repeated-baseline verification. No accepted After or visual improvement claim.
- First-person R1: requires continuous real controller playback; editor flycam, screenshots and static sweeps are not a pass.

## 004 candidate runtime evidence — 2026-10-21

- Main loaded with 7,436 editor actors. Seven PPVs were exported; brush coverage and override flags support an inferred Global source for grain/fringe, while final FSceneView composition was not directly exported.
- Captured five conditions A1/A2/G0/F0/A3, 30 genuine 1920×1080 frames each at FOV90. A/A drift and unequal world-time samples prevent a clean causal acceptance. Runtime CVars restored; no PPV/map/material asset saved. Experiment media remains private pending review.
- Full log rejects 113 distinct packages: the previous 111 plus two ModularHousing Stages map packages. Loader rejection is not a complete dependency assessment. No assets were deleted or header-patched.
- PIE streaming generation asserted RuntimeStreamingData.IsEmpty() and exited before a real first-person route could begin. Root cause remains unknown. No traversal or performance PASS is claimed. The same 504 MapCheck actor labels appeared during editor load and PIE generation; the combined 1008 messages are not 1008 new issues.
