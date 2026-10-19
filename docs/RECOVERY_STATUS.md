# Recovery status — evidence checked

- Full original RAR CRC: PASS, exit code0. SHA256 matches the P0 baseline.
- Cold Original: 58,579,712,222 bytes; all23,036 archived files checked for existence and size.
- Independent Working: 37,955,939,035 bytes;20,623,773,187 bytes excluded from the working copy only. Original keeps all Autosaves.
- Content, Main.umap, Config, blueprints and External Actors retained. Key SHA256 checks match Original and Working. Full Content redistribution is not provided.
- Matched Unreal Engine5.5.4, CL40574608 installed and verified through actual Build.version, executable and completed Epic manifest.
- Matched UE5.5.4 has opened `/Game/Main.Main` in the Working editor. A read-only probe recorded 7,436 loaded actors and no dirty content/map packages. This verifies editor loading, not full-world or playable-route health.
- The actual first-open MapCheck recorded 504 errors involving world references to spatially loaded actors. These remain unresolved. Asset discovery also flagged 111 incompatible packages; checked headers are newer than the serialization format accepted by this engine. Their full runtime impact is unverified. No header rewriting, upgrade, asset deletion or bulk resave was performed.
- Current loaded editor folders use names such as MainCorridor, RitualCorridor and Chasm. Their exact mapping to portfolio region names is still being checked; historical screenshot grouping is not a topology assertion.
- No scene, material, lighting or collision repair in this phase. No playable route, new visual Before/After or GPU benchmark yet.

The size reduction is omission of preserved caches/history, not deletion of project assets. File restoration does not by itself prove runtime recovery.
